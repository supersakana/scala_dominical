export default function buildContact() {
    const content = document.getElementById('content')
    console.log('werk')
    
    // content.append(homePage())
  }

function contentPage(){
  const container = document.createElement('div')
  container.classList.add('elements','flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'h-[80vh]', 'gap-x-10', 'gap-y-6', 'mx-4')

  const elements = contactElements()
  elements.forEach((e) =>{
    container.append(e)
  })

  return container
}