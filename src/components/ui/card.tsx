import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "no:group/card no:flex no:flex-col no:gap-4 no:overflow-hidden no:rounded-xl no:bg-card no:py-4 no:text-sm no:text-card-foreground no:ring-1 no:ring-foreground/10 no:has-data-[slot=card-footer]:pb-0 no:has-[>img:first-child]:pt-0 no:data-[size=sm]:gap-3 no:data-[size=sm]:py-3 no:data-[size=sm]:has-data-[slot=card-footer]:pb-0 no:*:[img:first-child]:rounded-t-xl no:*:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "no:group/card-header no:@container/card-header no:grid no:auto-rows-min no:items-start no:gap-1 no:rounded-t-xl no:px-4 no:group-data-[size=sm]/card:px-3 no:has-data-[slot=card-action]:grid-cols-[1fr_auto] no:has-data-[slot=card-description]:grid-rows-[auto_auto] no:[.border-b]:pb-4 no:group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "no:font-heading no:text-base no:leading-snug no:font-medium no:group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("no:text-sm no:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "no:col-start-2 no:row-span-2 no:row-start-1 no:self-start no:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("no:px-4 no:group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "no:flex no:items-center no:rounded-b-xl no:border-t no:bg-muted/50 no:p-4 no:group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
