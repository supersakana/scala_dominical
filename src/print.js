export default function buildPage() {
    const content = document.getElementById('content')
    
    content.append(homePage())
  }

function homePage(){
  const container = document.createElement('div')
  container.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[92vh]', 'gap-x-10', 'gap-y-6', 'mx-4')
  container.append(homeElements())

  return container
}

function homeElements(){
  const titleBlock = document.createElement('div')
  titleBlock.classList.add('text-center', 'lg:text-left')

  const title = document.createElement('h1')
  title.innerText = "SCALA"
  title.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')
  titleBlock.append(title)


  return titleBlock
}