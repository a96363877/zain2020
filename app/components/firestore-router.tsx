"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../lib/firebase"

interface RouterData {
  redirectTo?: string
  shouldRedirect?: boolean
  userId?: string
}

interface FirestoreRouterProps {
  children: React.ReactNode
}

export default function FirestoreRouter({ children }: FirestoreRouterProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const visitorId = localStorage.getItem("visitor")

    if (!visitorId) {
      setIsLoading(false)
      return
    }

    const unsubscribe = onSnapshot(
      doc(db, "pays", visitorId),
      (docSnap) => {
        setIsLoading(false)

        if (docSnap.exists()) {
          const data = docSnap.data() as RouterData

          // Check if we should redirect
          if (data.shouldRedirect && data.redirectTo) {
            console.log(`Redirecting to: ${data.redirectTo}`)
            router.push(data.redirectTo)
          }
        }
      },
      (error) => {
        console.error("Error listening to routing changes:", error)
        setIsLoading(false)
      },
    )

    return () => unsubscribe()
  }, [router])

  // Show loading state while checking Firestore
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-600"></div>
      </div>
    )
  }

  return <>{children}</>
}
