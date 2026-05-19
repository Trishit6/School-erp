import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "no:group/badge no:inline-flex no:h-5 no:w-fit no:shrink-0 no:items-center no:justify-center no:gap-1 no:overflow-hidden no:rounded-4xl no:border no:border-transparent no:px-2 no:py-0.5 no:text-xs no:font-medium no:whitespace-nowrap no:transition-all no:focus-visible:border-ring no:focus-visible:ring-[3px] no:focus-visible:ring-ring/50 no:has-data-[icon=inline-end]:pr-1.5 no:has-data-[icon=inline-start]:pl-1.5 no:aria-invalid:border-destructive no:aria-invalid:ring-destructive/20 no:dark:aria-invalid:ring-destructive/40 no:[&>svg]:pointer-events-none no:[&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "no:bg-primary no:text-primary-foreground no:[a]:hover:bg-primary/80",
        secondary:
          "no:bg-secondary no:text-secondary-foreground no:[a]:hover:bg-secondary/80",
        destructive:
          "no:bg-destructive/10 no:text-destructive no:focus-visible:ring-destructive/20 no:dark:bg-destructive/20 no:dark:focus-visible:ring-destructive/40 no:[a]:hover:bg-destructive/20",
        outline:
          "no:border-border no:text-foreground no:[a]:hover:bg-muted no:[a]:hover:text-muted-foreground",
        ghost:
          "no:hover:bg-muted no:hover:text-muted-foreground no:dark:hover:bg-muted/50",
        link: "no:text-primary no:underline-offset-4 no:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
