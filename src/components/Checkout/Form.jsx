import { useState } from "react";

const ContactForm = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({name,email,phone,address})
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <label htmlFor="address">Domicilio:</label>
            <input
                type="address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
            />

            <button style={{backgroundColor:'green',width:'30%', margin:'0 auto'}}>Crear orden</button>
        </form>
    );
};

export default ContactForm;
