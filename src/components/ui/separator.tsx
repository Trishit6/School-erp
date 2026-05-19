"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "no:shrink-0 no:bg-border no:data-horizontal:h-px no:data-horizontal:w-full no:data-vertical:w-px no:data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
