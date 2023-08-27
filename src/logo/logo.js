
function Logo() {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-container'); // Replace 'contact' with the actual ID of the section to scroll to
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHome = () => {
        const contactSection = document.getElementById('wrapper'); // Replace 'contact' with the actual ID of the section to scroll to
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div id='body'>
            <div id='nav-bar'>
                <button onClick={scrollToHome} id='nav-button'>
                    Home
                </button>
                <button onClick={scrollToContact} id='nav-button'>
                    Contact
                </button>
            </div>
            <div id='sapphire-logo' />
        </div>
    );
}

export default Logo;
