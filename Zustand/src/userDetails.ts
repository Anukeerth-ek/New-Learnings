import { create } from 'zustand'

export const userDetails = create((set) => ({
    user: '',
    loading: '',
    error: '',

    fetch: async (id:any) => {
        set({ loading: true })
        
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`)
            set({user: await response.json(), loading: false})
        } catch (err) {
            set({error: "Failed to fetch the data", err })
        }
    }
}))