"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "no:flex no:items-center no:gap-2 no:text-sm no:leading-none no:font-medium no:select-none no:group-data-[disabled=true]:pointer-events-none no:group-data-[disabled=true]:opacity-50 no:peer-disabled:cursor-not-allowed no:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
