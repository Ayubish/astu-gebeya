"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Mail, Phone, MapPin, Star, Edit2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/marketplace/header"
import Footer from "@/components/marketplace/footer"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Abebe Tadesse",
    email: "abebe@astu.edu.et",
    phone: "+251 9XX XXX XXXX",
    location: "Addis Ababa, Addis Ketema",
    bio: "Campus marketplace enthusiast - Buying and selling quality items since 2023",
    userType: "buyer",
    rating: 4.8,
    listings: 12,
    followers: 234,
  })

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onSellClick={() => {}} />

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>

          <div className="flex gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold">
                {profile.name.charAt(0)}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-accent p-2 rounded-full text-accent-foreground hover:bg-accent/90 transition">
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{profile.name}</h1>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full capitalize">
                  {profile.userType}
                </span>
              </div>

              {/* Rating & Stats */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(profile.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{profile.rating}</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{profile.listings}</span> Listings
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{profile.followers}</span> Followers
                </div>
              </div>

              <p className="text-muted-foreground text-sm">{profile.bio}</p>
            </div>

            {/* Edit Button */}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                {isEditing ? "Save" : "Edit"}
              </Button>

              <Button onClick={handleLogout} variant="outline">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Personal Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <Input
                  value={profile.name}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <Input
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <Input
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                <Input
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full p-3 rounded-lg border border-border bg-input text-foreground text-sm min-h-24 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Profile viewed</p>
                  <p className="text-xs text-muted-foreground">45 times this month</p>
                </div>
                <span className="text-lg">👁️</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Listings sold</p>
                  <p className="text-xs text-muted-foreground">8 items</p>
                </div>
                <span className="text-lg">✓</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Messages sent</p>
                  <p className="text-xs text-muted-foreground">23 this week</p>
                </div>
                <span className="text-lg">💬</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Joined date</p>
                  <p className="text-xs text-muted-foreground">January 15, 2023</p>
                </div>
                <span className="text-lg">📅</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
