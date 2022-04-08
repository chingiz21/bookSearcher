import qs from 'qs';

export class Request {
    baseUrl;  

    constructor(baseUrl) {
        this.baseUrl = baseUrl;    
    }

    async getListOfBooks(endpoint, params = {}) {
        let url = `${this.baseUrl}/${endpoint}?${qs.stringify(params.data)}`;
        
        const result = await fetch(url, {
            method: params.method,
            headers: {}
        });
        
        if (!result.ok) {
            return {error: result.json()};
        }
        return result.json();
        
    }
    
    async getBook(endpoint, params = {}) {
        let url = `${this.baseUrl}/${endpoint}/${params.id}?key=${params.key}`;

        const result = await fetch(url, {
            method: params.method,
            headers: {}
        });
        
        if (!result.ok) {
            return {error: result.json()};
        }
        return result.json();
    }
}