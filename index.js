const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empty.forEach(element =>{ 
 element.addEventListener('dragover', dragOver),
 element.addEventListener('dragenter', dragEnter),
 element.addEventListener('dragleave', dragLeave),
 element.addEventListener('drop', dragDrop)})

function dragStart(){
 this.className +=' hold'
 setTimeout(()=>this.className = 'invisible', 0)
}

function dragEnd() {
 this.className='fill'
}

function dragEnter(e) {
 e.preventDefault()
 this.className+= ' hovered'
}

function dragLeave() {
 this.className = 'empty'
}

function dragOver(e) {
 e.preventDefault()
}

function dragDrop() {
 this.className='empty'
 this.append(fill)
}
