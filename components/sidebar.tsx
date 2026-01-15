"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, History, Users, Settings, Plus, DollarSign, BarChart3, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "New Invoice", href: "/invoice/new", icon: Plus },
  { name: "History", href: "/history", icon: History },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Transactions", href: "/transactions", icon: DollarSign },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="shadow-lg"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 border-r border-border bg-card/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <FileText className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold text-foreground">Invoice Pro</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <div className="rounded-lg bg-primary/5 p-4">
              <p className="text-sm font-medium text-foreground">Premium Features</p>
              <p className="mt-1 text-xs text-muted-foreground">Upgrade to unlock advanced templates and analytics</p>
              <Button size="sm" className="mt-3 w-full" variant="default">
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
