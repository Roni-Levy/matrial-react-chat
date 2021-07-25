
export const BaseURL = "http://localhost:1234"

export const config = {
    headers: {
       Authorization: "Bearer " + localStorage.getItem('Token')
    }
}

