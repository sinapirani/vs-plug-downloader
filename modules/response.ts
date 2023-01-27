

export const Response = (success:boolean, data:any, code:number) => {
    return{
        success,
        data,
        code
    }
}