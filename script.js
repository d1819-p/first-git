let rows = 5;
let pattern = "";

//outer loop for 'rows' no. of time 
for(let i = 1; i <= rows; i++){
    //inner loop run for n
    for(let num = 1; num<= i; num++){
        pattern+=num;
    }
    pattern+='\n';
}
console.log(pattern);
