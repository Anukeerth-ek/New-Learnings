import './App.css'
import { z } from 'zod'

function App() {

const UserSchema = z.object({
    username: z.string(),
    
})

type User = z.infer<typeof UserSchema>

const user = { username: "Anu" }

console.log(UserSchema.safeParse(user))

  return (
    <>
     
    </>
  )
}

export default App
