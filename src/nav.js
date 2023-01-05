export default function buildNav() {
    const nav = document.createElement('nav')
    nav.classList.add('flex', 'justify-between', 'px-6', 'py-4')
    
    const elements = navElements()
    elements.forEach((e) => {
        nav.append(e)
    })

    document.body.prepend(nav)
  }

  function navElements(){
    const icon = document.createElement('ion-icon')
    icon.classList.add('text-3xl', 'cursor-pointer', 'hover:text-[#d8a126]', 'duration-500')
    icon.name = "restaurant-outline"

    const list = document.createElement('ul')
    list.classList.add('flex', 'items-center', 'justify-center', 'gap-x-4', 'text-lg', 'md:text-xl', 'font-logo', 'cursor-pointer')
    const links = ['Home', 'About', 'Menu']

    links.forEach((link) => {
        const li = document.createElement('li')
        li.id = link
        li.classList.add('hover:text-[#d8a126]', 'duration-500')
        li.innerText = link
        list.append(li)
    })

    return [icon, list]
  }