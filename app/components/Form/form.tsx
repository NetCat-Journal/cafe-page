'use client'
function Form() {
    return (
        <div className='p-8 md:flex md:flex-row md:gap-1'>
            <div className="w-full md:w-[50%] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14935.629938034499!2d-87.0792244424563!3d20.63262747618114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e432a8421a0db%3A0x6342ed9c1f817614!2sQuadra%20Caf%C3%A9%20-%20Specialty%20Coffee!5e0!3m2!1sen!2smx!4v1771449451029!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="md:w-[50%]">
                <form >
                    <div className='flex flex-col gap-4 mt-8'>
                        <input type="text" placeholder="Name" className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]' />
                        <input type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]' />
                        <textarea placeholder="Message" className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C47A2C]'></textarea>
                        <button type="submit" className='bg-[#C47A2C] text-white py-2 px-4 rounded-md hover:bg-[#a96522] transition'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;