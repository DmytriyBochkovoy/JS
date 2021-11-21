fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((json) => {

    let usersArray = json;
    let divArray = [];
    
    function createElementsUsers() {
        const USER_INFO_ARRAY= ['Name', 'Username', 'Email', 'Website', 'Address', 'City',]
        
        document.body.setAttribute('style', 'display: flex; flex-wrap: wrap;')

        for (let i = 0; i <= usersArray.length - 1; i++) {
            const USERS_INFO = document.createElement('button');
            const USERS_CLEAR = document.createElement('button');

            let elemImg = new Image;
            let pArray = [];

            elemImg.src = 'img/user.png';

            USERS_INFO.innerHTML = 'information';
            USERS_CLEAR.innerHTML = 'to clear';

            USERS_INFO.classList.add('button_info');
            USERS_CLEAR.classList.add('button_clear');

            USERS_INFO.setAttribute('style', 'margin: 5px; padding: 8px; border-radius: 5px;');
            USERS_CLEAR.setAttribute('style', 'margin: 5px; padding: 8px; border-radius: 5px;');

            USERS_INFO.onclick = () => {
                alert('geo: ' + 'lat: ' + usersArray[i].address.geo.lat + ', lng: ' + usersArray[i].address.geo.lng);
            };
            USERS_CLEAR.onclick = () => {
                divArray[i].remove();
            };

            for (let i = 0; i <= 5; i++) {
                pArray.push(document.createElement('p'));
            }

            divArray.push(document.createElement('div'));
            document.body.append(divArray[i]);
            divArray[i].setAttribute('style', 'background-color: #96c6da; wigth: 320px; border-radius: 10px; margin: 10px; padding: 15px; text-align: center;');

            pArray[0].innerHTML = `${USER_INFO_ARRAY[0]} - ${usersArray[i].name}.`;
           
            pArray[1].innerHTML = `${USER_INFO_ARRAY[1]} - ${usersArray[i].username}.`;
            
            pArray[2].innerHTML = `${USER_INFO_ARRAY[2]} - ${usersArray[i].email}.`;
            pArray[3].innerHTML = `${USER_INFO_ARRAY[3]} - ${usersArray[i].website}.`;
            pArray[4].innerHTML = `${USER_INFO_ARRAY[4]} - ${usersArray[i].address.street}.`;
            pArray[5].innerHTML = `${USER_INFO_ARRAY[5]} - ${usersArray[i].address.city}.`;

            divArray[i].append(elemImg, pArray[0], pArray[1], pArray[2], pArray[3], pArray[4], pArray[5], USERS_INFO, USERS_CLEAR);
        }
    }
    createElementsUsers()
});