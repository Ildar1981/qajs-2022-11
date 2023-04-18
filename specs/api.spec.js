import fetch from "node-fetch"
import {describe, expect, test} from '@jest/globals'

test('GET request', async () => {
    const response = fetch('https://bookstore.demoqa.com/swagger/');
    const data = await response.json();
    console.log(response.status)
    console.log(data)
});
