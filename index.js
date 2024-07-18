a = [5,2,0]
b = [3,3,1]
ar = 0
br = 0
rs =[0,0]
for(let i=0; i<3;i++){
    if(a[i]>b[i]){
        rs[0]= ar+1
        ar = rs[0]
    }else if(a[i]==b[i]){
        rs[0]= ar+0
        rs[1]= br+0
    }else{
        rs[1]= br+1
        br = rs[0]
    }
}
console.log(rs);

