import Axios from "axios"
import React, { useState } from "react"
import { API_URL } from "./config/constants"
import { Graduate } from "./model"

export const AuthContext = React.createContext<{
  graduate: Graduate | null
  token: string | null
  login: (email: string, password: string) => void
  logout: () => void
}>({
  graduate: null,
  token: null,
  login: () => {},
  logout: () => {},
})

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [graduate, setGraduate] = useState<Graduate | null>(null)
  const [token, setToken] = useState<string | null>(null)

  return (
    <AuthContext.Provider
      value={{
        graduate,
        token,
        login: async (email, password) => {
          try {
            const response = await Axios.post(`${API_URL}/login`, {
              email,
              password,
            })
            setGraduate(response.data.user)
            setToken(response.data.token)
            localStorage.setItem("graduate", JSON.stringify(response.data.user))
            localStorage.setItem("token", response.data.token)
          } catch (e) {
            console.log("error:", e)
          }
        },
        logout: () => {
          setGraduate(null)
          localStorage.removeItem("graduate")
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
