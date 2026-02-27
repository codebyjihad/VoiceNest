"use client"

import Image from "next/image"   
import { Bell, Search } from "lucide-react"
import userProfile from '@/public/userprofile.png'

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-card border-b border-border flex items-center justify-between px-6">

      {/* Left Side */}
      <h2 className="text-lg font-semibold text-foreground">
        Dashboard
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center bg-muted px-3 py-2 rounded-lg">
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

      </div>

    </div>
  )
}

export default Topbar