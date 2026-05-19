import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "no:group/button no:inline-flex no:shrink-0 no:items-center no:justify-center no:rounded-lg no:border no:border-transparent no:bg-clip-padding no:text-sm no:font-medium no:whitespace-nowrap no:transition-all no:outline-none no:select-none no:focus-visible:border-ring no:focus-visible:ring-3 no:focus-visible:ring-ring/50 no:active:not-aria-[haspopup]:translate-y-px no:disabled:pointer-events-none no:disabled:opacity-50 no:aria-invalid:border-destructive no:aria-invalid:ring-3 no:aria-invalid:ring-destructive/20 no:dark:aria-invalid:border-destructive/50 no:dark:aria-invalid:ring-destructive/40 no:[&_svg]:pointer-events-none no:[&_svg]:shrink-0 no:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "no:bg-primary no:text-primary-foreground no:[a]:hover:bg-primary/80",
        outline:
          "no:border-border no:bg-background no:hover:bg-muted no:hover:text-foreground no:aria-expanded:bg-muted no:aria-expanded:text-foreground no:dark:border-input no:dark:bg-input/30 no:dark:hover:bg-input/50",
        secondary:
          "no:bg-secondary no:text-secondary-foreground no:hover:bg-secondary/80 no:aria-expanded:bg-secondary no:aria-expanded:text-secondary-foreground",
        ghost:
          "no:hover:bg-muted no:hover:text-foreground no:aria-expanded:bg-muted no:aria-expanded:text-foreground no:dark:hover:bg-muted/50",
        destructive:
          "no:bg-destructive/10 no:text-destructive no:hover:bg-destructive/20 no:focus-visible:border-destructive/40 no:focus-visible:ring-destructive/20 no:dark:bg-destructive/20 no:dark:hover:bg-destructive/30 no:dark:focus-visible:ring-destructive/40",
        link: "no:text-primary no:underline-offset-4 no:hover:underline",
      },
      size: {
        default:
          "no:h-8 no:gap-1.5 no:px-2.5 no:has-data-[icon=inline-end]:pr-2 no:has-data-[icon=inline-start]:pl-2",
        xs: "no:h-6 no:gap-1 no:rounded-[min(var(--radius-md),10px)] no:px-2 no:text-xs no:in-data-[slot=button-group]:rounded-lg no:has-data-[icon=inline-end]:pr-1.5 no:has-data-[icon=inline-start]:pl-1.5 no:[&_svg:not([class*=size-])]:size-3",
        sm: "no:h-7 no:gap-1 no:rounded-[min(var(--radius-md),12px)] no:px-2.5 no:text-[0.8rem] no:in-data-[slot=button-group]:rounded-lg no:has-data-[icon=inline-end]:pr-1.5 no:has-data-[icon=inline-start]:pl-1.5 no:[&_svg:not([class*=size-])]:size-3.5",
        lg: "no:h-9 no:gap-1.5 no:px-2.5 no:has-data-[icon=inline-end]:pr-2 no:has-data-[icon=inline-start]:pl-2",
        icon: "no:size-8",
        "icon-xs":
          "no:size-6 no:rounded-[min(var(--radius-md),10px)] no:in-data-[slot=button-group]:rounded-lg no:[&_svg:not([class*=size-])]:size-3",
        "icon-sm":
          "no:size-7 no:rounded-[min(var(--radius-md),12px)] no:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "no:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
