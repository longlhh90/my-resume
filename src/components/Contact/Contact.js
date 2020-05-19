import React, { Component } from 'react';
import classes from './Contact.module.css';
import ContactItems from './ContactItem/ContactItem';
import ContactGreeting from './ContactGreeting/ContactGreeting';
import SectionTitle from '../UI/SectionTitle/SectionTitle';


class Contact extends Component {
    state = {
        location: ["fa fa-map-marker-alt", "Saskatoon, SK Canada"],
        phone: ["fa fa-phone-alt", "(306) 914-8559"],
        email: ["fa fa-envelope", "me@longlhh.ca"]
    }
    render() {
        return (
            <div className={classes.Contact}>
                <SectionTitle title='Contact Information' />
                <ContactGreeting />
                <section className={classes.Section}>
                    <ContactItems listing={this.state} />
                </section>
            </div>
        );
    }
}

export default Contact;