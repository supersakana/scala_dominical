import View from './img/three.jpg';

export default function buildHome() {
    const content = document.getElementById('content')
    content.append(homePage())
  }

function homePage(){
  const container = document.createElement('div')
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  container.append(homeText(), homeImg())

  return container
}

function homeText(){
  const textBlock = document.createElement('div')
  textBlock.classList.add('text-center', 'lg:text-left')

  const header = document.createElement('h1')
  header.innerText = "SCALA"
  header.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')

  const subHeader = document.createElement('p')
  subHeader.innerText = "Resturaunt and Bar"
  subHeader.classList.add('text-2xl', 'font-logo')

  textBlock.append(header, subHeader)

  return textBlock
}

function homeImg(){
  const img = document.createElement('img')
  img.src = View
  img.alt = "view"
  img.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md')

  return img
}