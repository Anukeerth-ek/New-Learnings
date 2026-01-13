import { create } from 'zustand'

export const userStore = create((set) => (
    {
    count: 0,
    incrementFn: () => set((state: any) => ({ count: state.count+1 })),
    decrementFn: ()=> set((state:any)=> ({count: state.count-1}))
}
))