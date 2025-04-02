function activateLink(event) {
    document.querySelectorAll('.breadcrumb a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}