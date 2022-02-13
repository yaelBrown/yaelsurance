import nc from "next-connect"
import { getAllUsers } from "../../controllers/users/users"

const handler = nc()

handler.get(getAllUsers)

export default handler