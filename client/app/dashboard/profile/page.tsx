"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Camera,
  Mail,
  Phone,
  MapPin,
  Star,
  Edit2,
  LogOut,
  TrendingUp,
  Package,
  MessageSquare,
  Calendar,
} from "lucide-react"
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
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onSellClick={() => {}} />

      {/* Profile Header */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-6 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-5xl font-bold">
                {profile.name.charAt(0)}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-accent p-2 rounded-full text-accent-foreground hover:bg-accent/90 transition">
                  <Camera className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold">{profile.name}</h1>
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full capitalize w-fit">
                  {profile.userType}
                </span>
              </div>

              {/* Rating & Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(profile.rating) ? "fill-white text-white" : "text-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-lg">{profile.rating}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  <span className="font-semibold">{profile.listings} Listings</span>
                </div>

                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">{profile.followers} Followers</span>
                </div>
              </div>

              <p className="text-white/90 text-sm mt-3">{profile.bio}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                {isEditing ? "Save" : "Edit"}
              </Button>

              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>

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
          <div className="bg-card rounded-lg border border-border p-6 h-fit">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl flex-shrink-0">👁️</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">Profile viewed</p>
                  <p className="text-xs text-muted-foreground">45 times this month</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">Listings sold</p>
                  <p className="text-xs text-muted-foreground">8 items</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                <MessageSquare className="w-6 h-6 text-secondary flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">Messages sent</p>
                  <p className="text-xs text-muted-foreground">23 this week</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-muted rounded-lg border border-border">
                <Calendar className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">Joined date</p>
                  <p className="text-xs text-muted-foreground">January 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">My Listings</h2>
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground mb-4">You have {profile.listings} active listings</p>
            <Link href="/categories">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Browse All Listings</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
