"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="no:isolate no:z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "no:z-50 no:inline-flex no:w-fit no:max-w-xs no:origin-(--transform-origin) no:items-center no:gap-1.5 no:rounded-md no:bg-foreground no:px-3 no:py-1.5 no:text-xs no:text-background no:has-data-[slot=kbd]:pr-1.5 no:data-[side=bottom]:slide-in-from-top-2 no:data-[side=inline-end]:slide-in-from-left-2 no:data-[side=inline-start]:slide-in-from-right-2 no:data-[side=left]:slide-in-from-right-2 no:data-[side=right]:slide-in-from-left-2 no:data-[side=top]:slide-in-from-bottom-2 no:**:data-[slot=kbd]:relative no:**:data-[slot=kbd]:isolate no:**:data-[slot=kbd]:z-50 no:**:data-[slot=kbd]:rounded-sm no:data-[state=delayed-open]:animate-in no:data-[state=delayed-open]:fade-in-0 no:data-[state=delayed-open]:zoom-in-95 no:data-open:animate-in no:data-open:fade-in-0 no:data-open:zoom-in-95 no:data-closed:animate-out no:data-closed:fade-out-0 no:data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="no:z-50 no:size-2.5 no:translate-y-[calc(-50%-2px)] no:rotate-45 no:rounded-[2px] no:bg-foreground no:fill-foreground no:data-[side=bottom]:top-1 no:data-[side=inline-end]:top-1/2! no:data-[side=inline-end]:-left-1 no:data-[side=inline-end]:-translate-y-1/2 no:data-[side=inline-start]:top-1/2! no:data-[side=inline-start]:-right-1 no:data-[side=inline-start]:-translate-y-1/2 no:data-[side=left]:top-1/2! no:data-[side=left]:-right-1 no:data-[side=left]:-translate-y-1/2 no:data-[side=right]:top-1/2! no:data-[side=right]:-left-1 no:data-[side=right]:-translate-y-1/2 no:data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
