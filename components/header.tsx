"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Search */}
        <div className="flex flex-1 items-center gap-4">
          <div className="relative w-full max-w-[200px] sm:max-w-[300px] lg:max-w-md xl:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search invoices, clients..." className="pl-10 w-full" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
          </Button>

          <div className="hidden sm:flex items-center gap-2 lg:gap-3 rounded-lg border border-border bg-card px-2 lg:px-3 py-1 lg:py-2">
            <div className="h-7 w-7 lg:h-8 lg:w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs lg:text-sm font-semibold text-primary">MV</span>
            </div>
            <div className="text-xs lg:text-sm">
              <p className="font-medium text-foreground">MOTTIVME</p>
              <p className="text-[10px] lg:text-xs text-muted-foreground">Admin</p>
            </div>
          </div>

          {/* Mobile user avatar only */}
          <div className="sm:hidden h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">MV</span>
          </div>
        </div>
      </div>
    </header>
  )
}
