import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='hero-container'>
            <div className='left-hero'>
                <div className='words-hero'>
                    <h1>Lorem ipsum idos<br/>dolor sit amet.</h1>
                    <p>Error, consequuntur voluptatibus! Sit amet aspernatur explicabo fugit dignissimos ipsa nihil alias quia totam, earum tempora! Nemo veniam recusandae molestiae id voluptas.</p>
                </div>
                
                <div className='button-group'>
                    <button>Place Holder</button>
                    <button>Place Holder</button>
                </div>
            </div>
            <div className='right-hero'>
                <img src="https://picsum.photos/300/300" alt="place-holder" />
            </div>
        </div>
    </>
  )
}
