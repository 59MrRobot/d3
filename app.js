const base = window.location.pathname.includes('d3') ? '/d3/' : '/';

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    const navbar = document.getElementById('navbar');
    // Store pages in an array
    const pages = [
        { name: 'Home', link: `${base}index.html` },
        { name: 'About', link: `${base}pages/about.html` },
        { name: 'Services', link: `${base}pages/services.html` },
        { name: 'Contact', link: `${base}pages/contact.html` },
        { name: 'Design', link: `${base}pages/design.html`}
    ];

    // Create a <ul> element for the navbar
    const navList = document.createElement('ul');

    // Loop through the pages array and create a list item for each page
    pages.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        // Set the link href and text content
        link.href = page.link;
        link.textContent = page.name;

        // Append the link to the list item
        listItem.appendChild(link);

        // Append the list item to the nav list
        navList.appendChild(listItem);
    });

    // Append the navigation list to the navbar
    navbar.appendChild(navList);
});
