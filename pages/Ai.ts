import { APIRequestContext } from "@playwright/test"

export class AI {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext

    }
    
}