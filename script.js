var niza = ['Ana', 'Marija', 'Vesna', 'Aleksandra'];
var najgolemo = niza[0];
var najmalo = niza[0];

for(var i=0; i<3; i++) {
    if(najgolemo.length < niza.length) {
        najgolemo = niza[i];
    }else {
        continue;
    }
} console.log(najgolemo);

for(var j=0;j<niza.length;i++) {
    if(najmalo.length > niza[j].length){
        najmalo=niza[i];
    } else {
        continue;
    }
};


    console.log("Najgolemo e:" + " " + najgolemo);
    console.log("Najmalo e:" + " " + najmalo);