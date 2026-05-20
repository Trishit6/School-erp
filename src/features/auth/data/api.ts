import axios from "axios"

const api = axios.create({
  baseURL: "https://jwt-api2.local/api",
  withCredentials: true,
})

export type LoginPayload = {
  email: string
  password: string
}

export const loginService = async (
  email: string,
  password: string
) => {
  const response = await api.post(
    "/auth/login",
    {
      email,
      password,
    }
  )

  return response.data
}

export default api