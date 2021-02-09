export const SET_UID = "SET_UID"
export const SET_CONTAINERS = "SET_CONTAINERS"

export const setuid = (uid)=>(
    {
        type:SET_UID,
        uid:uid
    }
)

export const setContainers = (containers)=>({
    type:SET_CONTAINERS,
    containers:containers
})