import { request, test } from "@playwright/test";
import { AI } from "../pages/ai";

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const ai = new AI(apiContext)
       
    })

    test('Notifications Content CRUD',async () => {
        const apiContext = await request.newContext()
        const ai = new AI(apiContext)
        console.log('success')
    }) 

})