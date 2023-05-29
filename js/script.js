window.onload = () => {
    const navItems = document.querySelectorAll('.nav-item')

    navItems.forEach(item => {
        item.onclick = e => {
            navItems.forEach(item => {
                item.classList.remove('is-active')
            })
            e.currentTarget.classList.add('is-active')
        }
    })
}