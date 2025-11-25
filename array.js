class Array {

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }
}