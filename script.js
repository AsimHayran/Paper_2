document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navUl.classList.contains('show')) {
                    navUl.classList.remove('show');
                }
            }
        });
    });
    
    // Graph placeholders - in a real implementation these would be replaced with actual charts
    const graphPlaceholders = document.querySelectorAll('.graph-placeholder');
    
    graphPlaceholders.forEach(placeholder => {
        const graphType = placeholder.getAttribute('data-graph');
        let graphText = '';
        
        switch(graphType) {
            case 'energy-transfer-sankey':
                graphText = 'Energy Transfer Sankey Diagram';
                break;
            case 'transverse-wave':
                graphText = 'Transverse Wave Diagram';
                break;
            default:
                graphText = 'Graph Visualization';
        }
        
        placeholder.textContent = graphText;
    });
    
    // MathJax configuration
    if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [['$','$'], ['\\(','\\)']],
                processEscapes: true
            },
            CommonHTML: {
                linebreaks: { automatic: true }
            },
            'HTML-CSS': {
                linebreaks: { automatic: true }
            },
            SVG: {
                linebreaks: { automatic: true }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Display animation for 4 seconds
    setTimeout(() => {
        const glitch = document.getElementById('glitch-intro');
        glitch.style.animation = 'fade-out 1s forwards';
        
        // Show main content after animation
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.getElementById('main-content').style.display = 'block';
            glitch.remove(); // Remove element after animation
        }, 1000);
        
    }, 1000); // Total display time = 4s
});