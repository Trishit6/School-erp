"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "no:group/avatar no:relative no:flex no:size-8 no:shrink-0 no:rounded-full no:select-none no:after:absolute no:after:inset-0 no:after:rounded-full no:after:border no:after:border-border no:after:mix-blend-darken no:data-[size=lg]:size-10 no:data-[size=sm]:size-6 no:dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "no:aspect-square no:size-full no:rounded-full no:object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "no:flex no:size-full no:items-center no:justify-center no:rounded-full no:bg-muted no:text-sm no:text-muted-foreground no:group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "no:absolute no:right-0 no:bottom-0 no:z-10 no:inline-flex no:items-center no:justify-center no:rounded-full no:bg-primary no:text-primary-foreground no:bg-blend-color no:ring-2 no:ring-background no:select-none",
        "no:group-data-[size=sm]/avatar:size-2 no:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "no:group-data-[size=default]/avatar:size-2.5 no:group-data-[size=default]/avatar:[&>svg]:size-2",
        "no:group-data-[size=lg]/avatar:size-3 no:group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "no:group/avatar-group no:flex no:-space-x-2 no:*:data-[slot=avatar]:ring-2 no:*:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "no:relative no:flex no:size-8 no:shrink-0 no:items-center no:justify-center no:rounded-full no:bg-muted no:text-sm no:text-muted-foreground no:ring-2 no:ring-background no:group-has-data-[size=lg]/avatar-group:size-10 no:group-has-data-[size=sm]/avatar-group:size-6 no:[&>svg]:size-4 no:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 no:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
