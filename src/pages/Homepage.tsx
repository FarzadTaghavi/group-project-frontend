import axios from "axios"
import React, { useEffect, useState } from "react"
import { Graduate } from "../model"
import { API_URL } from "../config/constants"

export default function Homepage() {
  const [graduates, setGraduates] = useState<Graduate[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API_URL}`)
      // console.log("response from axios:", response)
      setGraduates(response.data)
    }
    fetchData()
  }, [])

  console.log("got the graduates?:", graduates)

  return (
    <>
      <div>Hello from homepage</div>
      {graduates.map((grad) => {
        return <p>{grad.fullName}</p>
      })}
    </>
  )
}
