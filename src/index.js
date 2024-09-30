module.exports = function toReadable (number) {
    let res = ''
    const arrNum1 = ['zero','one','two','three','four','five','six','seven','eight','nine'];   
    const arrNum2 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const arrNum3 = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    
    let n = String(number).split('').map(elem => +elem);    
    
        if (number >= 100 && number <= 999) {
                        
            if (n[1] == 0 && n[2] == 0) {
                res += arrNum1[n[0]] + ' hundred';
            }
            if (n[1] != 0 && n[2] == 0) {
                res += arrNum1[n[0]] + ' hundred ' + arrNum2[n[1]-1];
            }
            if (n[1] != 0 && n[2] != 0) {   
                if (number-(+(n[0])+'00') >= 11 && (number-(+(n[0])+'00') <= 19)) {
                    res += arrNum1[n[0]] + ' hundred ' + arrNum3[n[2]-1];
                }  else {
                    res += arrNum1[n[0]] + ' hundred ' + arrNum2[n[1]-1] + ' '+arrNum1[n[2]];
                }                               
            }
            if (n[1] == 0 && n[2] != 0) {
                res += arrNum1[n[0]] + ' hundred ' + arrNum1[n[2]];
            }
        }     
   
        if (number >= 11 && number <=19) {
            res += arrNum3[n[1]-1];
        }  

        if ((number >= 20 && number <= 99) || number == 10 ) {
            if (n[1] == 0) {
                res += arrNum2[n[0]-1];
            } else {
                res += arrNum2[n[0]-1] +' '+arrNum1[n[1]];
            }
        }     
       
        if (number >= 0 && number <=9) {
            res += arrNum1[n[0]];
        }          
        
  return res;
}
