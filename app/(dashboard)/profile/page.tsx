"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import UserProfileImage from '@/public/userprofile.png'
import { Edit2, Save, Mail, Phone } from 'lucide-react'

const ProfilePage = () => {
  // Editable state
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('John Doe')
  const [bio, setBio] = useState('Full Stack Developer | JavaScript, React, Next.js')
  const [email, setEmail] = useState('johndoe@example.com')
  const [phone, setPhone] = useState('+880 321 094 984432')

  const handleEditToggle = () => setIsEditing(!isEditing)
  const handleSave = () => {
    setIsEditing(false)
    console.log({ name, bio, email, phone })
  }

  return (
    <div className="container max-w-4xl mx-auto mt-12 px-4">
      <div className="bg-card dark:bg-card rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* User Avatar */}
        <div className="relative">
          <Image
            src={UserProfileImage}
            alt="User Image"
            width={150}
            height={150}
            className="rounded-full border-4 border-border"
          />
          <button
            onClick={isEditing ? handleSave : handleEditToggle}
            className="absolute bottom-0 right-0 bg-primary p-2 rounded-full shadow-md hover:opacity-90 transition"
            title={isEditing ? 'Save Profile' : 'Edit Profile'}
          >
            {isEditing ? <Save size={20} className="text-foreground" /> : <Edit2 size={20} className="text-foreground" />}
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {isEditing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-3xl font-bold text-foreground bg-muted px-2 py-1 rounded"
            />
          ) : (
            <h1 className="text-3xl font-bold text-foreground">{name}</h1>
          )}

          {isEditing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-lg text-muted-foreground bg-muted px-2 py-1 rounded resize-none"
            />
          ) : (
            <p className="text-lg text-muted-foreground">{bio}</p>
          )}

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {isEditing ? (
              <>
                <div className="flex items-center gap-2 text-foreground bg-muted px-4 py-2 rounded-lg shadow-sm">
                  <Mail size={18} />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent outline-none w-full text-foreground"
                  />
                </div>
                <div className="flex items-center gap-2 text-foreground bg-muted px-4 py-2 rounded-lg shadow-sm">
                  <Phone size={18} />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-transparent outline-none w-full text-foreground"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-foreground bg-muted px-4 py-2 rounded-lg shadow-sm">
                  <Mail size={18} />
                  <span>{email}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground bg-muted px-4 py-2 rounded-lg shadow-sm">
                  <Phone size={18} />
                  <span>{phone}</span>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfilePage