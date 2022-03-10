import { ButtonHTMLAttributes } from "react"
import '../styles/button.scss'

export function Button(props) {
  return (
    <a href="#">
      <button className="button" type="submit" {...props}></button>
    </a>
  )
}