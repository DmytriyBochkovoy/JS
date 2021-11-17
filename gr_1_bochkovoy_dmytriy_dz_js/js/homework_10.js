
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    console.log(response);
    return response.json();
})
.then(async (json) => {
    let usersArray = json;
    let divArray = [];

    function createElementsUsers() {
        document.body.setAttribute('style', 'display: flex; flex-wrap: wrap;')
        let usersInfo = document.createElement('button');
        let usersClear = document.createElement('button');

        for (let i = 0; i <= usersArray.length - 1; i++ ) {
            user = usersArray[i];
            
            divArray[i] = document.createElement('div');
            document.body.append(divArray[i]);
            
            divArray[i].setAttribute('style', 'background-color: rgb(212, 247, 248); margin: 10px; width: 200px; height: 300px; border: 1px solid green;');
           
            divArray[i].innerHTML = `Name - ${usersArray[i].name}. 
                Username - ${usersArray[i].username}.
                Email - ${usersArray[i].email}.
                Website - ${usersArray[i].website}.
                Address - ${usersArray[i].address.street}.
                City - ${usersArray[i].address.city}.`;

            divArray[i].appendChild(usersInfo);
            divArray[i].appendChild(usersClear);
        }
    }
    createElementsUsers()
    console.log(usersArray) 
});