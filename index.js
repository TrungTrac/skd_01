// function compareTriplets(a,b){
//     result = [0,0];
//     for(let i=0; i<3;i++){
//         // điều kiện a và b nằm trong khoản từ 1-100
//         if(a[i]>=100||a[i]<1||b[i]>=100||b[i]<1){
//              return
//         }
//         // so sánh điểm 
//         if(a[i]>b[i]){
//             result[0]++
//         }else if(a[i]<b[i]){
//             result[1]++
//         }
//     }
//     return result
// }
// a = [1,8,3]
// b = [5,16,48]
// //kết quả [0,3]
// compareTriplets(a,b)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}

let alice = [];
let bob = [];

rl.question('Enter 3 numbers for Alice (separated by space): ', (aliceInput) => {
    alice = aliceInput.split(' ').map(Number);

    rl.question('Enter 3 numbers for Bob (separated by space): ', (bobInput) => {
        bob = bobInput.split(' ').map(Number);

        const result = compareTriplets(alice, bob);
        console.log(`Alice's score: ${result[0]}, Bob's score: ${result[1]}`);
        
        rl.close();
    });
});
