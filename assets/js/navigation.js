// Accessible navigation following WCAG 2.0 guidelines
(function() {
    'use strict';

    if (!document) return;

    let currentOpenDropdown = null;

    document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle (ARIA Disclosure Pattern)
        const mobileMenuButton = document.getElementById('site-nav__trigger');
        const mobileMenuLinks = document.getElementById('site-nav__links');

        if (mobileMenuButton && mobileMenuLinks) {
            mobileMenuButton.addEventListener('click', function() {
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            });

            // Keyboard support (Enter and Space keys)
            mobileMenuButton.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                }
            });
        }

        // Dropdown menu implementation
        const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
        
        dropdownButtons.forEach(function(button) {
            const parent = button.closest('.nav-item--has-dropdown');
            const menu = parent ? parent.querySelector('.dropdown-menu') : null;
            const menuItems = menu ? menu.querySelectorAll('a[role="menuitem"]') : [];
            
            if (!parent || !menu) return;
            
            // Button click handler
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                
                // Close any open dropdown
                if (currentOpenDropdown && currentOpenDropdown !== button) {
                    closeDropdown(currentOpenDropdown);
                }
                
                if (isExpanded) {
                    closeDropdown(button);
                } else {
                    openDropdownMenu(button);
                }
            });
            
            // Keyboard navigation for button
            button.addEventListener('keydown', function(e) {
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                    case 'ArrowDown':
                        e.preventDefault();
                        openDropdownMenu(button);
                        if (menuItems.length > 0) {
                            menuItems[0].focus();
                        }
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        openDropdownMenu(button);
                        if (menuItems.length > 0) {
                            menuItems[menuItems.length - 1].focus();
                        }
                        break;
                    case 'Escape':
                        if (button.getAttribute('aria-expanded') === 'true') {
                            closeDropdown(button);
                        }
                        break;
                }
            });
            
            // Keyboard navigation for menu items
            menuItems.forEach(function(item, index) {
                item.addEventListener('keydown', function(e) {
                    switch (e.key) {
                        case 'ArrowDown':
                            e.preventDefault();
                            const nextIndex = (index + 1) % menuItems.length;
                            menuItems[nextIndex].focus();
                            break;
                        case 'ArrowUp':
                            e.preventDefault();
                            const prevIndex = index === 0 ? menuItems.length - 1 : index - 1;
                            menuItems[prevIndex].focus();
                            break;
                        case 'Home':
                            e.preventDefault();
                            menuItems[0].focus();
                            break;
                        case 'End':
                            e.preventDefault();
                            menuItems[menuItems.length - 1].focus();
                            break;
                        case 'Escape':
                            e.preventDefault();
                            closeDropdown(button);
                            button.focus();
                            break;
                        case 'Tab':
                            // Allow tab to move to next focusable element, but close dropdown
                            closeDropdown(button);
                            break;
                    }
                });
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (currentOpenDropdown && !e.target.closest('.nav-item--has-dropdown')) {
                closeDropdown(currentOpenDropdown);
            }
        });
        
        // Close dropdown on escape key globally
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && currentOpenDropdown) {
                closeDropdown(currentOpenDropdown);
                currentOpenDropdown.focus();
            }
        });
        
        // Update dropdown state on window resize
        function updateDropdownState() {
            const isMobile = window.innerWidth <= 800;
            
            dropdownButtons.forEach(function(button) {
                const parent = button.closest('.nav-item--has-dropdown');
                const menu = parent ? parent.querySelector('.dropdown-menu') : null;
                
                if (isMobile) {
                    // Mobile: Ensure button is interactive
                    button.disabled = false;
                    button.style.pointerEvents = '';
                    button.tabIndex = 0;
                    button.removeAttribute('aria-hidden');
                } else {
                    // Desktop: Dropdown works on hover, but keyboard navigation still works
                    button.disabled = false;
                    button.style.pointerEvents = '';
                    button.tabIndex = 0;
                    button.removeAttribute('aria-hidden');
                    
                    // Close any open dropdowns when switching to desktop
                    if (button.getAttribute('aria-expanded') === 'true') {
                        closeDropdown(button);
                    }
                }
            });
        }
        
        function openDropdownMenu(button) {
            const parent = button.closest('.nav-item--has-dropdown');
            const menu = parent ? parent.querySelector('.dropdown-menu') : null;
            const menuItems = menu ? menu.querySelectorAll('a[role="menuitem"]') : [];
            
            if (!parent || !menu) return;
            
            button.setAttribute('aria-expanded', 'true');
            parent.classList.add('dropdown-open');
            menu.style.display = 'block';
            
            // Set tabindex for menu items
            menuItems.forEach(function(item) {
                item.tabIndex = 0;
            });
            
            currentOpenDropdown = button;
        }
        
        function closeDropdown(button) {
            const parent = button.closest('.nav-item--has-dropdown');
            const menu = parent ? parent.querySelector('.dropdown-menu') : null;
            const menuItems = menu ? menu.querySelectorAll('a[role="menuitem"]') : [];
            
            if (!parent || !menu) return;
            
            button.setAttribute('aria-expanded', 'false');
            parent.classList.remove('dropdown-open');
            menu.style.display = 'none';
            
            // Remove tabindex from menu items when closed
            menuItems.forEach(function(item) {
                item.tabIndex = -1;
            });
            
            if (currentOpenDropdown === button) {
                currentOpenDropdown = null;
            }
        }
        
        // Initialize state
        updateDropdownState();
        window.addEventListener('resize', updateDropdownState);
    });
})();
