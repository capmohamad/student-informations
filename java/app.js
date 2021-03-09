'use strict';

let random = function (min, max){
    return Math.floor(Math.random() * (min - max + 1 ) + min)
}

function table( id, Name, Email, Mobile, Age, Tuition){
    this.id = 0 ;
    this.Name = 'name';
    this.Email = 'email';
    this.Mobile = 'mobile';
  
    this.Tuition = 'tuition';

}
table.prototype.getAge = function(){

}



























function save(){
    let storeData;
    let parasaedStoreData = { Studentemail:[] , StudentMobilenumber:[] , Tuition:[]};
    console.log();
    if(localStorage.getItem('data') !== null){
        storeData = localStorage.getItem('data')
        parasaedStoreData = JSON.parse(storeData);

        for(let i = 0 ; i <table.all.length ; i++){
            allStudentemail[i]+=parasaedStoreData.Studentemail[i];
            allStudentMobilenumber[i]+= parasaedStoreData.allStudentMobilenumber[i];
            allTuition[i]+= parasaedStoreData.allTuition[i];

        }
    }
    parasaedStoreData.Studentemail =allStudentemail;
    parasaedStoreData.StudentMobilenumber =allStudentMobilenumber;

parasaedStoreData.Tuition = allTuition;
let newDataTostore =JSON.stringify(parasaedStoreData);
localStorage.setItem('data',newDataTostore);

}