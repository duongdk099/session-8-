const context = {
    users : null,
    index : null,
    a : null,
}


window.onload = async () => {

    await    getUsers();

renderUser();
userDetail();
}
const getUsers = async () => {

    const usersAPI = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const userData = await usersAPI.json();
    const users = userData;    
    context.users = users;
}

const renderUser = () => {
    var ulUsers = document.getElementById("list-User");
    console.log(context.users);
    let stringConcat = ''
    // for ( const i of context.users)
    // {
    //     const liUser = `<li id="user-${i}" >  ${i.employee_name}</li>`;
    //     stringConcat += liUser;
        
    // }
    // ulUsers.innerHTML = stringConcat;
    // console.log(stringConcat);


    context.users.forEach( (user,index) => {
        const liUser = `<li id="user-${index}" >${user.employee_name}</li>`
        stringConcat += liUser;
        
    });
    ulUsers.innerHTML = stringConcat;
    ;
    // console.log(stringConcat);
    

}

const userDetail = () => {
    var ulDetail = document.getElementById('employee_salary')

    let x = context.users; 
    for ( let i=0; i<x.length ; i++)
    {
        const eachUser = document.getElementById(`user-${i}`);
        const user = context.users[i]
        eachUser.addEventListener('mouseover', () => {
            const displayUser = `
            <div class="user-salary" >
            
             <span class="user-employee_salary" > ${user.employee_salary} </span>
            
            </div>
            `;
            
            ulDetail.innerHTML = displayUser;
            
            
        })
    }
}