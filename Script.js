function getAdmins(map) {
  let admins = [];
    for ([key, value] of map) {
        if(value === 'admin') {
           admins.push(key); 
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Enzo', 'User');
usuarios.set('Edu', 'Admin');

console.log(getAdmins(usuarios));

