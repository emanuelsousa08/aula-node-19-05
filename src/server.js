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
             id: 2,
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
             id: 3,
             nome: 'Cabaça'
         })
         return res.end('Objeto cadastrado com sucesso!');
    }

    return res.end('Tela inicial');
})

server.listen(3001)
