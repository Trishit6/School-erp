"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "no:fixed no:inset-0 no:z-50 no:bg-black/10 no:transition-opacity no:duration-150 no:data-ending-style:opacity-0 no:data-starting-style:opacity-0 no:supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "no:fixed no:z-50 no:flex no:flex-col no:gap-4 no:bg-popover no:bg-clip-padding no:text-sm no:text-popover-foreground no:shadow-lg no:transition no:duration-200 no:ease-in-out no:data-ending-style:opacity-0 no:data-starting-style:opacity-0 no:data-[side=bottom]:inset-x-0 no:data-[side=bottom]:bottom-0 no:data-[side=bottom]:h-auto no:data-[side=bottom]:border-t no:data-[side=bottom]:data-ending-style:translate-y-[2.5rem] no:data-[side=bottom]:data-starting-style:translate-y-[2.5rem] no:data-[side=left]:inset-y-0 no:data-[side=left]:left-0 no:data-[side=left]:h-full no:data-[side=left]:w-3/4 no:data-[side=left]:border-r no:data-[side=left]:data-ending-style:translate-x-[-2.5rem] no:data-[side=left]:data-starting-style:translate-x-[-2.5rem] no:data-[side=right]:inset-y-0 no:data-[side=right]:right-0 no:data-[side=right]:h-full no:data-[side=right]:w-3/4 no:data-[side=right]:border-l no:data-[side=right]:data-ending-style:translate-x-[2.5rem] no:data-[side=right]:data-starting-style:translate-x-[2.5rem] no:data-[side=top]:inset-x-0 no:data-[side=top]:top-0 no:data-[side=top]:h-auto no:data-[side=top]:border-b no:data-[side=top]:data-ending-style:translate-y-[-2.5rem] no:data-[side=top]:data-starting-style:translate-y-[-2.5rem] no:data-[side=left]:sm:max-w-sm no:data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="no:absolute no:top-3 no:right-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="no:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("no:flex no:flex-col no:gap-0.5 no:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("no:mt-auto no:flex no:flex-col no:gap-2 no:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "no:font-heading no:text-base no:font-medium no:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("no:text-sm no:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
