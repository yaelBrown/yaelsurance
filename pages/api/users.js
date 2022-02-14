import nc from "next-connect"
import { getAllUsers, registerUser } from "../../controllers/users/usersController"

const handler = nc()

handler.get(getAllUsers)
handler.post(registerUser)

export default handler