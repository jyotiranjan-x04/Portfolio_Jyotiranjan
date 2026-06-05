"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface DockProps {
  className?: string
  items: {
    icon: React.ReactElement<{ className?: string }>
    label: string
    onClick?: () => void
  }[]
}

export default function Dock({ items, className }: DockProps) {
  const [active, setActive] = React.useState<string | null>(null)
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <div className={cn("flex items-center justify-center w-full py-2", className)}>
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "flex items-end gap-2 sm:gap-4 px-4 py-3 rounded-3xl",
          "border border-zinc-800 bg-zinc-900/70 backdrop-blur-2xl shadow-lg"
        )}
        style={{
          transform: "perspective(600px) rotateX(10deg)", // arc layout illusion
        }}
      >
        {items.map((item, i) => {
          const isActive = active === item.label
          const isHovered = hovered === i

          return (
            <motion.div
              key={item.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? -5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex flex-col items-center"
            >
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-2xl relative w-12 h-12",
                  "transition-colors",
                  isHovered && "shadow-lg shadow-yellow-400/20"
                )}
                onClick={() => {
                  setActive(item.label)
                  item.onClick?.()
                }}
                aria-label={item.label}
              >
                {React.cloneElement(item.icon, {
                  className: cn(
                    "h-6 w-6 transition-colors",
                    isActive ? "text-yellow-400" : "text-zinc-200"
                  )
                })}
                {/* Glowing ring effect */}
                {isHovered && (
                  <motion.span
                    layoutId="glow"
                    className="absolute inset-0 rounded-2xl border border-yellow-400/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Button>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="dot"
                  className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1"
                />
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
