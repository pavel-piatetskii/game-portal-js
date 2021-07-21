import React, { useEffect } from "react";
import './Greeting.scss'

export default function Greeting(props) {

  const { setShowGreeting } = props;

  useEffect(() => {
    setTimeout(() => setShowGreeting(false), 1500)
  }, [])

  return (
    <div className="greeting">
      <span className="greeting__left">GAME</span>
      <i className="fa fa-shield greeting__shield"></i>
      <span className="greeting__right">PORTAL</span>
    </div>
  )
}