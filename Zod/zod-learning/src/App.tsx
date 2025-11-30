import './App.css'
import { z } from 'zod'

function App() {

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  address: z.string().optional(),
  isProgrammer: z.boolean()
})

type User = z.infer<typeof UserSchema>

const user = { username: "Anu", age: 2, address: "Puthan purayil", isProgrammer: true }

  console.log(UserSchema.safeParse(user).success)

  return (
    <>
     
    </>
  )
}

export default App
