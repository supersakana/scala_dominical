export default function buildNav() {
    const nav = document.createElement('nav')
    nav.classList.add('flex', 'justify-between', 'px-6', 'py-4')

    nav.append(navIcon(), navList())

    document.body.prepend(nav)
  }

  function navIcon(){
    const icon = document.createElement('ion-icon')
    icon.classList.add('text-4xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500', 'item')
    icon.name = "restaurant-outline"

    return icon
  }

  function navList(){
    const list = document.createElement('ul')
    list.classList.add('flex', 'items-center', 'justify-center', 'gap-x-4', 'text-lg', 'md:text-xl', 'font-logo', 'cursor-pointer')

    const links = ['Home', 'Menu', 'Contact']

    links.forEach((link) => {
        const li = document.createElement('li')
        li.id = link.toLowerCase()
        li.classList.add('hover:text-[#d8a126]', 'duration-500', 'item')
        li.innerText = link
        list.append(li)
    })

    return list
  }