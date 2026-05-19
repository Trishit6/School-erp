import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("no:animate-pulse no:rounded-md no:bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
