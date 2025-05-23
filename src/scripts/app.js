document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Simulate form submission
            console.log('Form submitted:', data);
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Example of dynamic content update
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        const services = [
            '24/7 Towing Service',
            'Roadside Assistance',
            'Flat Tire Change',
            'Jump Start',
            'Fuel Delivery',
             'Mobile Mechanic Services',
             'Passenger Pickup and Drop-off', 
             'Long Distance Towing',
             'Heavy Duty Towing',
             'Motorcycle Towing',
             'Accident Recovery',
             'Vehicle Lockout Service',
             'Battery Replacement'      
        ];

        services.forEach(service => {
            const serviceItem = document.createElement('li');
            serviceItem.textContent = service;
            servicesSection.appendChild(serviceItem);
        });
    }
});