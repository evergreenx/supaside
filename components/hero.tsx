import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Star, Mic, Video, Scissors, Share2 } from "lucide-react";

export default function Header() {
  const contentTypes = [
    { id: "podcasts", label: "Podcasts", icon: Mic },
    { id: "video-interviews", label: "Video interviews", icon: Video },
    { id: "social-clips", label: "Social media clips", icon: Scissors },
    { id: "live-streaming", label: "Live streaming", icon: Share2 },
  ];

  const brands = [
    { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=120" },
    { name: "ProductHunt", logo: "/placeholder.svg?height=40&width=120" },
    { name: "The Verge", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Mashable", logo: "/placeholder.svg?height=40&width=120" },
    { name: "TechRadar", logo: "/placeholder.svg?height=40&width=120" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-orange-400">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-black bg-black backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500" />
              <span className="text-lg font-semibold text-white">
                Supaside FM
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#" className="text-sm text-teal-200 hover:text-white">
                Features
              </Link>
              <Link href="#" className="text-sm text-teal-200 hover:text-white">
                Solutions
              </Link>
              <Link href="#" className="text-sm text-teal-200 hover:text-white">
                Resources
              </Link>
              <Link href="#" className="text-sm text-teal-200 hover:text-white">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
 
            <Link
              href="/sign-in"
              className="hidden text-sm text-teal-200 hover:text-white md:block"
            >
              Login
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
            >
              <Link href={'/sign-up'}>
              Start for Free

              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container relative flex min-h-screen flex-col items-start justify-center px-4 pt-16">
        <div className=" space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Elevate your
            <br />
            conversations.
          </h1>
          <p className="text-xl text-teal-200">
            Supaside FM: Your all-in-one studio for high-quality recording,
            seamless editing, and effortless live streaming. Amplify your
            content, your way.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-teal-200">
              What would you like to create?
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {contentTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    className="border-teal-600 bg-teal-800/50"
                  />
                  <label
                    htmlFor={type.id}
                    className="flex items-center text-sm text-teal-100"
                  >
                    <type.icon className="mr-2 h-4 w-4" />
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex max-w-sm flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 border-teal-600 bg-teal-800/50 text-white placeholder:text-teal-400"
              />
              <Button
                size="lg"
                className="h-12 bg-gradient-to-r from-teal-500 to-emerald-500 px-8 hover:from-teal-600 hover:to-emerald-600"
              >
                Get Started
              </Button>
            </div>
            <p className="text-xs text-teal-300">
              * No credit card needed. Free plan available.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
