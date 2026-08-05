#!/usr/bin/env python3

"""
Given two sitemap.xml files,
produce a list of changed URLs.
"""

import argparse
from collections.abc import Iterable
from functools import partial
from pathlib import Path
import json
from filecmp import dircmp, DEFAULT_IGNORES

import logging
import sys

logger = logging.getLogger()


def recursive_compare(dcmp: dircmp[str], parent: Path) -> Iterable[Path]:
    logging.info(f"Recursively check {parent}")
    for name in dcmp.diff_files:
        logging.info("diff_file %s found in %s and %s" % (name, dcmp.left, dcmp.right))
        yield parent / name

    for name in dcmp.right_only:
        logging.info("%s found only in %s" % (name, dcmp.right))
        yield parent / name

    for dirname, subdir in dcmp.subdirs.items():
        yield from recursive_compare(subdir, parent / Path(dirname))


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("old", type=Path, metavar="old/")
    p.add_argument("new", type=Path, metavar="new/")
    p.add_argument("--format", choices=("json", "0", "nl"))
    p.add_argument("--output", type=partial(open, mode="w"), metavar="changed.json", default=sys.stdout)
    p.add_argument("--prefix", type=str, default="")
    p.add_argument("--verbose", action="store_true")
    a = p.parse_args()

    logging.basicConfig(level=logging.DEBUG if a.verbose else logging.WARNING)

    dcmp = dircmp(a.old, a.new, ignore=DEFAULT_IGNORES + ["changed-urls.py", "artifact.tar", "sitemap.xml"])

    changes: list[Path] = []
    for path in recursive_compare(dcmp, parent=Path(".")):
        changes.append(a.prefix + str(path))

    # outputs
    if a.format=="json":
        json.dump(list(map(str, changes)), a.output)
    elif a.format=="0":
        for p in changes:
            print(p, end="\0", file=a.output)
    else:
        for p in changes:
            print(p, file=a.output)


if __name__ == "__main__":
    main()
