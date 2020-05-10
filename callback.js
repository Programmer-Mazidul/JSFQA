function explain_callback(name, age, task){
    task();
    console.log('Hello ', name);
    console.log('your age ', age);
    

}

function washHand(){
    console.log('wash hand with soap')
}

function takeShower(){
    console.log('Take shower');
}

function scrollFacebok(){
    console.log('Scroll Facebook but dont like any post');
}
explain_callback('Mahabub ', 11, washHand);
explain_callback('Lemon', 29, takeShower);
explain_callback('Mazid', 23, scrollFacebok);