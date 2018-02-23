export class ApiService{
    constructor(){

    }
    getCurrency(){
        fetch('https://api.fixer.io/latest')
            .then(function(response) {
                return response.json()
            })
    }
}