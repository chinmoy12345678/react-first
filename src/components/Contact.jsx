import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Abc' />
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='Abc@xyz.com' />
            </div>
            <div>
                <label>Query</label>
                <input type="text" required placeholder='Write your questions here' />
            </div>
            <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
