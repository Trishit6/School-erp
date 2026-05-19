"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "no:group/tabs no:flex no:gap-2 no:data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "no:group/tabs-list no:inline-flex no:w-fit no:items-center no:justify-center no:rounded-lg no:p-[3px] no:text-muted-foreground no:group-data-horizontal/tabs:h-8 no:group-data-vertical/tabs:h-fit no:group-data-vertical/tabs:flex-col no:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "no:bg-muted",
        line: "no:gap-1 no:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "no:relative no:inline-flex no:h-[calc(100%-1px)] no:flex-1 no:items-center no:justify-center no:gap-1.5 no:rounded-md no:border no:border-transparent no:px-1.5 no:py-0.5 no:text-sm no:font-medium no:whitespace-nowrap no:text-foreground/60 no:transition-all no:group-data-vertical/tabs:w-full no:group-data-vertical/tabs:justify-start no:hover:text-foreground no:focus-visible:border-ring no:focus-visible:ring-[3px] no:focus-visible:ring-ring/50 no:focus-visible:outline-1 no:focus-visible:outline-ring no:disabled:pointer-events-none no:disabled:opacity-50 no:has-data-[icon=inline-end]:pr-1 no:has-data-[icon=inline-start]:pl-1 no:aria-disabled:pointer-events-none no:aria-disabled:opacity-50 no:dark:text-muted-foreground no:dark:hover:text-foreground no:group-data-[variant=default]/tabs-list:data-active:shadow-sm no:group-data-[variant=line]/tabs-list:data-active:shadow-none no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4",
        "no:group-data-[variant=line]/tabs-list:bg-transparent no:group-data-[variant=line]/tabs-list:data-active:bg-transparent no:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent no:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "no:data-active:bg-background no:data-active:text-foreground no:dark:data-active:border-input no:dark:data-active:bg-input/30 no:dark:data-active:text-foreground",
        "no:after:absolute no:after:bg-foreground no:after:opacity-0 no:after:transition-opacity no:group-data-horizontal/tabs:after:inset-x-0 no:group-data-horizontal/tabs:after:bottom-[-5px] no:group-data-horizontal/tabs:after:h-0.5 no:group-data-vertical/tabs:after:inset-y-0 no:group-data-vertical/tabs:after:-right-1 no:group-data-vertical/tabs:after:w-0.5 no:group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("no:flex-1 no:text-sm no:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
