import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "no:h-8 no:w-full no:min-w-0 no:rounded-lg no:border no:border-input no:bg-transparent no:px-2.5 no:py-1 no:text-base no:transition-colors no:outline-none no:file:inline-flex no:file:h-6 no:file:border-0 no:file:bg-transparent no:file:text-sm no:file:font-medium no:file:text-foreground no:placeholder:text-muted-foreground no:focus-visible:border-ring no:focus-visible:ring-3 no:focus-visible:ring-ring/50 no:disabled:pointer-events-none no:disabled:cursor-not-allowed no:disabled:bg-input/50 no:disabled:opacity-50 no:aria-invalid:border-destructive no:aria-invalid:ring-3 no:aria-invalid:ring-destructive/20 no:md:text-sm no:dark:bg-input/30 no:dark:disabled:bg-input/80 no:dark:aria-invalid:border-destructive/50 no:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
