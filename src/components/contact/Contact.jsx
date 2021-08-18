import {useState} from 'react';
import './contact.scss'

export default function Contact() {
    const [message, setMessage] = useState(false)

    /**
     * the function `handleSubmit` will prevent refreshing the page when submit is clicked 
     * @param {*} e - event 
     * removes message entered in the input field. and displays thank you message once submitted.
     */
    const handleSubmit = (e) => {
        const input = document.getElementById('message');
        input.value = '';
        e.preventDefault();
        setMessage(true);

    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/contact.gif" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <textarea id="message" placeholder="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP! ;)</span>}
                </form>
            </div>
        </div>
    )
}
