
export const BaseURL = "http://localhost:1234"

export const config = {
    headers: {
       Authorization: "Bearer " + localStorage.getItem('Token')
    }
}

export const useQueryConfig = {
    staleTime: 5000,
    onSuccess: () => console.log("Data Fetched")
}
