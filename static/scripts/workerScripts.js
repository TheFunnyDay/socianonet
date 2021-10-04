
const byScroll = () => {
    // document.querySelector("#top").addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     })
    // });
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 350) {
            document.querySelector("#scroll-menu").classList.add('fixed')
            document.querySelector("#scroll-menu").classList.remove('absolute')


        }
        else {
            document.querySelector("#scroll-menu").classList.add('absolute')
            document.querySelector("#scroll-menu").classList.remove('fixed')


        }

    })
}

byScroll()

