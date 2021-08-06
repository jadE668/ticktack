let turn = 0;
let main = document.getElementById('main');
main.addEventListener('click', event => {
    if (event.target.className = 'square') {
        if (turn % 2 == 0){
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = 'O'
        }
        turn++
        checkWinner();
    }
})

function checkWinner(){
    let boxes = document.getElementsByClassName('square');
    let array =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i=0; i<array.length; i++){
        if ( boxes[array[i][0]].innerHTML == 'X' && boxes[array[i][1]].innerHTML == 'X' && boxes[array[i][2]].innerHTML == 'X' ){
            alert('Победили крестики');
        } else if (boxes[array[i][0]].innerHTML == 'O' && boxes[array[i][1]].innerHTML == 'O' && boxes[array[i][2]].innerHTML == 'O'){
            alert('Победили нолики');
        }
    }
}