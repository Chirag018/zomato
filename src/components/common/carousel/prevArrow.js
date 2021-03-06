import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div className={className}
            style={{
                ...style,
                background:'white',
                display:'block'
            }}
            onClick={onClick}
        >

        </div>
    )
}

export default PrevArrow
