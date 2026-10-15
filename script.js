let a,r,n,t,p, cI;
p= 5000;
t=2;
r=5;
n=2;
a= p*(1+(r/(n*100)))**(n*t);
console.log("Total Amount is ",a)
cI=a-p;
console.log("The compound interest after ",t," year is ",cI);

