// Fix navigation URLs for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        
        // Fix relative URLs to absolute URLs
        if (href === '/') {
            link.setAttribute('href', '/System_News/');
        } else if (href === '/posts/') {
            link.setAttribute('href', '/System_News/posts/');
        } else if (href === '/about/') {
            link.setAttribute('href', '/System_News/about/');
        }
    });
    
    console.log('Navigation URLs fixed for GitHub Pages');
});