document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded successfully!");

    // Email protection
    const emailElement = document.getElementById('email');
    if (emailElement) {
        const encodedEmail = "fardin.ganjkhanloo@jhu.edu".split('').map(char => '&#' + char.charCodeAt(0) + ';').join('');
        emailElement.innerHTML = `<a href="#" onclick="decodeEmail(event)">${encodedEmail}</a>`;
    }
});

function decodeEmail(event) {
    event.preventDefault();
    const encodedEmail = event.target.innerHTML;
    const decodedEmail = encodedEmail.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
    window.location.href = 'mailto:' + decodedEmail;
}
