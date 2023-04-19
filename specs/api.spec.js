import fetch from 'node-fetch'
import {describe, expect, test} from '@jest/globals'

test('GET request', async () => {
    const response = fetch('https://bookstore.demoqa.com/swagger/');
    const data = await response.json();
    console.log(response.status)
    console.log(data)
});

test('create user pass login', async () => {
    const response = await fetch( 'https://bookstore.demoqa.com/swagger/',
    {method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login:'user',
        password: 12345,
    })
})
const data = await response.json();
console.log(data)
expect(data.brand).toEqual('macintosh')
})

test('create user pass login', async () => {
    const response = await fetch( 'https://bookstore.demoqa.com/swagger/',
    {method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login:'user',
        password: 12345,
    })
})
const data = await response.json();
console.log(data)
expect(data.brand).toEqual('macintosh')
})

test('create user pass login', async () => {
    const response = await fetch( 'https://bookstore.demoqa.com/swagger/',
    {method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login:'user',
        password: 12345,
    })
})
const data = await response.json();
console.log(data)
expect(data.brand).toEqual('macintosh')
})

test('create user pass login', async () => {
    const response = await fetch( 'https://bookstore.demoqa.com/swagger/',
    {method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login:'user',
        password: 12345,
    })
})
const data = await response.json();
console.log(data)
expect(data.brand).toEqual('macintosh')
})

test('create user pass login', async () => {
    const response = await fetch( 'https://bookstore.demoqa.com/swagger/',
    {method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login:'user',
        password: 12345,
    })
})
const data = await response.json();
console.log(data)
expect(data.brand).toEqual('macintosh')
})