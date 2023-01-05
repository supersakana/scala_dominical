export default function buildPage() {
    const content = document.getElementById('content')
    
    content.append(homePage())
  }

function homePage(){
  const container = document.createElement('div')
  container.classList.add('flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[92vh]', 'gap-x-10', 'gap-y-6', 'mx-4')
  const elements = homeElements()

  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}

function homeElements(){
  // container for header text
  const titleBlock = document.createElement('div')
  titleBlock.classList.add('text-center', 'lg:text-left')

  // title
  const title = document.createElement('h1')
  title.innerText = "SCALA"
  title.classList.add('text-7xl', 'lg:text-8xl', 'font-logo', 'tracking-widest')

  // sub title
  const subTitle = document.createElement('p')
  subTitle.innerText = "Resturaunt and Bar"
  subTitle.classList.add('text-2xl', 'font-logo')

  titleBlock.append(title, subTitle)

  // home image
  const homeImg = document.createElement('img')
  homeImg.src = "../src/img/three.jpg"
  homeImg.alt = "view"
  homeImg.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md', 'shadow-xl')

  return [titleBlock, homeImg]
}