import React from 'react'

function Button({ text, color, addClass }: { text: string, color: string, addClass: string }) {
    return (
        <button className={`${color} ${addClass} px-4 py-1 text-lg  md:text-xl   rounded-lg w-fit`}>{text}</button>
    )
}

export default Button