import {v4 as uuidv4} from 'uuid';
let users =[];

export const createUser = (req,res)=>{
    
    const user = req.body;
    // const userId = uuidv4();
    // const userWithId = {...user, id:uuidv4()}
    users.push({...user, id:uuidv4()});
    res.send(`User with the name ${user.firstName} added to database!`);
}

export const getUsers = (req,res)=>{
    res.send(users);
}

export const getUser = (req,res)=>{ //THE COLON SIGN HERE MEANS ANY INPUT AFTER THE USERS/ABCDEF1234 HITS THIS GET REQUEST.
    const {id}= req.params;
    const foundUser = users.find((user)=> user.id === id)
    res.send(foundUser);

}

export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id != id)

    res.send(`User with the id ${id} deleted`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;
    const user = users.find((user)=>user.id == id)
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`User with id: ${id} has been updated`)
    
}