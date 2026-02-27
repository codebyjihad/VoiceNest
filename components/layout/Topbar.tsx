"use client"

import { useState, useEffect } from "react"
import Image from "next/image"   
import { Bell, Search, Moon, Sun } from "lucide-react"
import userProfile from '@/public/userprofile.png'

const Topbar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    setIsDark(html.classList.contains('dark'))
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(html.classList.contains('dark'))
  }

  return (
    <div className="w-full h-16 bg-card dark:bg-card border-b border-border flex items-center justify-between px-6">

      {/* Left Side */}
      <h2 className="text-lg font-semibold text-foreground">
        Dashboard
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center bg-muted dark:bg-muted-foreground/10 px-3 py-2 rounded-lg">
          <Search size={16} className="text-muted-foreground mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-40 placeholder:text-muted-foreground"
          />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-foreground" />
          <span className="absolute -top-2 -right-2 bg-sidebar-primary text-sidebar-primary-foreground text-xs px-1.5 rounded-full">
            4
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={userProfile}
            alt="user"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-muted dark:bg-muted-foreground/10 hover:bg-muted/80 dark:hover:bg-muted-foreground/20 transition"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>

    </div>
  )
}

export default Topbar