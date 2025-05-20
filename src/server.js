// import http from 'node:http'

// const server = http.createServer((req, res) => {
//     const {method, url} = req;

//     const users =  []

//     if (method === 'GET' && url === '/user') {
//         if (users.length === 0) {
//             return res.end('Nenhum usuário encontrado.')
//         }
//         return res.end(JSON.stringify(users));
//     }
//     if (method === 'POST' && url === '/user') {
//         users.push({
//             id: 1,
//             nome: 'Emanuel Sousa'
//         })
//         return res.end('Usuário cadastrado com sucesso!');
//     }

//     if (method === 'GET' && url === '/products') {
//         if (users.length === 0) {
//             return res.end('Nenhum produto encontrado!')
//         }else{
//             return res.end(JSON.stringify(users))
//         }
//     }

//     if (method === 'patch' && url === '/products') {
//         if (users.length !== 0) {
//             users[0].product = 'Produto 1'

//             return res.end('Atualização de usuário efetuada!')
//         }else{
//             return res.end('Nenhum usuário encontrado')
//         }
//     }

//     return res.end('Bem vindo à tela inicial')
// })

// server.listen(3000)

import http from 'node:http'

const users = [];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if (method === 'GET' && url === '/usuario') {
         if (users.length === 0) {
             return res.end('Nenhum usuário encontrado.')
         }
         return res.end(JSON.stringify(users));
    }
    
    if (method === 'POST' && url === '/usuario') {
        users.push({
             id: 1,
             nome: 'Emanuel Sousa'
         })
         return res.end('Usuário cadastrado com sucesso!');
    }
    
    if (method === 'GET' && url === '/produto') {
         if (users.length === 0) {
             return res.end('Nenhum produto encontrado.')
         }
         return res.end(JSON.stringify(users));
    }
    
    if (method === 'POST' && url === '/produto') {
        users.push({
             id: 1,
             nome: 'Produto 1'
         })
         return res.end('Produto cadastrado com sucesso!');
    }

    if (method === 'GET' && url === '/objeto') {
         if (users.length === 0) {
             return res.end('Nenhum objeto cadastrado.')
         }
         return res.end(JSON.stringify(users));
    }
    
    if (method === 'POST' && url === '/objeto') {
        users.push({
             id: 1,
             nome: 'Cabaça'
         })
         return res.end('Objeto cadastrado com sucesso!');
    }

    return res.end('Tela inicial');
})

server.listen(3001)