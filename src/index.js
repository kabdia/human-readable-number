module.exports = function toReadable (number) {
    let res = ''
    const arrNum1 = ['one','two','three','four','five','six','seven','eight','nine'];
    const arrNum2 = ['ten','twelwe','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
 
    let n = String(number).split('').map(elem => +elem);
    console.log(n);
    if (n.length === 3) {
        res += arrNum1[n[0]-1]+' hundred ';        
        if (n[1] != 0) {
            res += arrNum2[n[1]-1] +' '+arrNum1[n[2]-1];
            
        } else {
            res += arrNum1[n[2]-1];
        }
    } 
    if (n.length === 2) {
        if (n[1] == 0){
            res += arrNum2[n[0]-1];
        } else {
            res += arrNum2[n[0]-1] + arrNum1[n[1]-1];
        }
    }       
    
  return res;
}
