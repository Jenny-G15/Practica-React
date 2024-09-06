import React, { useEffect } from 'react'

export default function BodyBackground({background}) {

    useEffect(() => {
        document.documentElement.style.setProperty('--backgroundImage', `url(${background})`)
    }, [background])

    // document.documentElement.style.setProperty('--backgroundImage', background)
    // document.body.style.backgroundRepeat('no-repeat')
    // document.body.style.backgroundSize('cover')
}

//https://stackoverflow.com/questions/65678684/setting-body-background-image-inside-useeffect
//https://syntackle.com/blog/setting-background-color-of-body-dynamically-in-react-5tVYr3/