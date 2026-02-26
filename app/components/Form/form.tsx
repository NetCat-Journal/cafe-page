'use client'
import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'An error occurred while sending your message. Please try again later.');
            }

        }
        catch (error) {
            setStatus('error');
            setErrorMessage('An error occurred while sending your message. Please try again later.');
        }
    }
    return (
        <div className='px-8 md:flex md:flex-row md:gap-1'>
            <div className="w-full md:w-[50%] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14935.629938034499!2d-87.0792244424563!3d20.63262747618114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e432a8421a0db%3A0x6342ed9c1f817614!2sQuadra%20Caf%C3%A9%20-%20Specialty%20Coffee!5e0!3m2!1sen!2smx!4v1771449451029!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="md:w-[50%]">
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 mt-8'>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-[#8e8e8e]">Name*</label>
                            <input onChange={changeHandler} type="text" id="name" name="name" placeholder="Name" required value={formData.name} className='text-[#a1a1a1] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]' />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-[#8e8e8e]">Email*</label>
                            <input onChange={changeHandler} type="email" name="email" placeholder="Email" required value={formData.email} className='text-[#a1a1a1] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]' />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="phone" className="text-[#8e8e8e]">Phone Number*</label>
                            <input onChange={changeHandler} type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} className='text-[#a1a1a1] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]' />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="message" className="text-[#8e8e8e]">Message*</label>
                            <textarea onChange={changeHandler} name="message" placeholder="Message" required value={formData.message} className='text-[#a1a1a1] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]'></textarea>
                        </div>
                        <button type="submit" className='bg-[#C47A2C] text-white py-2 px-4 rounded-md hover:bg-[#a96522] transition'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;