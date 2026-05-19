"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"

import { cn } from "@/lib/utils"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="no:isolate no:z-50 no:outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn("no: no: no:z-50 no:max-h-(--available-height) no:w-(--anchor-width) no:min-w-32 no:origin-(--transform-origin) no:overflow-x-hidden no:overflow-y-auto no:rounded-lg no:bg-popover no:p-1 no:text-popover-foreground no:shadow-md no:ring-1 no:ring-foreground/10 no:duration-100 no:outline-none no:data-[side=bottom]:slide-in-from-top-2 no:data-[side=inline-end]:slide-in-from-left-2 no:data-[side=inline-start]:slide-in-from-right-2 no:data-[side=left]:slide-in-from-right-2 no:data-[side=right]:slide-in-from-left-2 no:data-[side=top]:slide-in-from-bottom-2 no:data-open:animate-in no:data-open:fade-in-0 no:data-open:zoom-in-95 no:data-closed:animate-out no:data-closed:overflow-hidden no:data-closed:fade-out-0 no:data-closed:zoom-out-95", className )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "no:px-1.5 no:py-1 no:text-xs no:font-medium no:text-muted-foreground no:data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "no:group/dropdown-menu-item no:relative no:flex no:cursor-default no:items-center no:gap-1.5 no:rounded-md no:px-1.5 no:py-1 no:text-sm no:outline-hidden no:select-none no:focus:bg-accent no:focus:text-accent-foreground no:not-data-[variant=destructive]:focus:**:text-accent-foreground no:data-inset:pl-7 no:data-[variant=destructive]:text-destructive no:data-[variant=destructive]:focus:bg-destructive/10 no:data-[variant=destructive]:focus:text-destructive no:dark:data-[variant=destructive]:focus:bg-destructive/20 no:data-disabled:pointer-events-none no:data-disabled:opacity-50 no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4 no:data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "no:flex no:cursor-default no:items-center no:gap-1.5 no:rounded-md no:px-1.5 no:py-1 no:text-sm no:outline-hidden no:select-none no:focus:bg-accent no:focus:text-accent-foreground no:not-data-[variant=destructive]:focus:**:text-accent-foreground no:data-inset:pl-7 no:data-popup-open:bg-accent no:data-popup-open:text-accent-foreground no:data-open:bg-accent no:data-open:text-accent-foreground no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="no:ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn("no: no: no:w-auto no:min-w-[96px] no:rounded-lg no:bg-popover no:p-1 no:text-popover-foreground no:shadow-lg no:ring-1 no:ring-foreground/10 no:duration-100 no:data-[side=bottom]:slide-in-from-top-2 no:data-[side=left]:slide-in-from-right-2 no:data-[side=right]:slide-in-from-left-2 no:data-[side=top]:slide-in-from-bottom-2 no:data-open:animate-in no:data-open:fade-in-0 no:data-open:zoom-in-95 no:data-closed:animate-out no:data-closed:fade-out-0 no:data-closed:zoom-out-95", className )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "no:relative no:flex no:cursor-default no:items-center no:gap-1.5 no:rounded-md no:py-1 no:pr-8 no:pl-1.5 no:text-sm no:outline-hidden no:select-none no:focus:bg-accent no:focus:text-accent-foreground no:focus:**:text-accent-foreground no:data-inset:pl-7 no:data-disabled:pointer-events-none no:data-disabled:opacity-50 no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="no:pointer-events-none no:absolute no:right-2 no:flex no:items-center no:justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "no:relative no:flex no:cursor-default no:items-center no:gap-1.5 no:rounded-md no:py-1 no:pr-8 no:pl-1.5 no:text-sm no:outline-hidden no:select-none no:focus:bg-accent no:focus:text-accent-foreground no:focus:**:text-accent-foreground no:data-inset:pl-7 no:data-disabled:pointer-events-none no:data-disabled:opacity-50 no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="no:pointer-events-none no:absolute no:right-2 no:flex no:items-center no:justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("no:-mx-1 no:my-1 no:h-px no:bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "no:ml-auto no:text-xs no:tracking-widest no:text-muted-foreground no:group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
