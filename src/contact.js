export default function buildContact() {
    const content = document.getElementById('content')
    content.append(contactPage())
  }

function contactPage(){
  const container = document.createElement('div')
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  const elements = contactElements()
  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}

function contactElements(){
    const text = contactText()
    const img = contactImg()

    return [text, img]
}

function contactText(){
  const textBlock = document.createElement('div')
  textBlock.classList.add('flex', 'flex-col', 'gap-y-3')

  const header = document.createElement('h1')
  header.innerText = "Contact us"
  header.classList.add('text-6xl', 'font-logo')

  const phone = document.createElement('p')
  phone.innerText = "+(506) 1234 5678"
  phone.classList.add('text-xl', 'font-logo')

  const email = document.createElement('p')
  email.innerText = "therealemailgoes@here.com"
  email.classList.add('text-xl', 'font-logo')

  textBlock.append(header, email, phone)

  return textBlock
}

function contactImg(){
  const img = document.createElement('img')
  img.src = "../src/img/four.jpg"
  img.alt = "view"
  img.classList.add('w-[30rem]', 'lg:w-[35rem]', 'rounded-md')

  return img
}