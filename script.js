function sayHello (name){
    alert(`Hello ${name}`);
    if(name != undefined || name != null){
        let result = prompt('How Are You Today?');
        if(result === 'Baik'){
            alert('Aku Senang Mendengar Nya >_<');
        }else {
            alert('Tolong Jaga Kesehatan Mu -_-')
        }
    }
};

let name = sayHello(prompt("What's Your Name? "));