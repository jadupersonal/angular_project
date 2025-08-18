
export interface IClient{
    empName : string,
    empId : number,
    empCode : string,
    empEmailId : string,
    empDesignation : string,
    role : string,
}

export interface APIResponse{
    message : string,
    result : boolean,
    data : any,

}