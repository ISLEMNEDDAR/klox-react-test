import axios from 'axios';
export const RequestService = {
    GetRequest,
    PostRequest,
    PatchRequest,
    DeleteRequest,
    PutRequest
};

function createHeader(protect,authUser,typeContent = null){
    let headers = {}
    headers['Content-type'] = typeContent === null ? "application/json" : typeContent
    if( protect ) headers['Authorization'] = `Bearer ${authUser}`
    return headers
}

async function GetRequest(urlroot, url, protect, authUser = null, typeContent = null) {
    const header = createHeader(protect, authUser, typeContent)
    console.log(header)
    return await axios.get(`${urlroot}${url}`, {
        headers: header
    })
}

async function PostRequest(urlroot, url, data, protect, authUser = null, typeContent = null) {
    return await axios.post(`${urlroot}${url}`, data, {
        headers: createHeader(protect, authUser, typeContent)
    })
}
async function PatchRequest(urlroot, url, data, protect, authUser = null) {
    return await axios.patch(`${urlroot}${url}`, data, {
        headers: createHeader(protect, authUser)
    })
}
async function DeleteRequest(urlroot, url, protect, authUser = null) {
    return await axios.delete(`${urlroot}${url}`, {
        headers: createHeader(protect, authUser)
    })
}
async function PutRequest(urlroot, url, data, protect, authUser = null) {
    return axios.put(`${urlroot}${url}`, data, {
        headers: createHeader(protect, authUser)
    });
}
