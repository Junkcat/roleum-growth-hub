import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-p-600 text-white hover:bg-p-700 active:bg-p-800 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border-2 border-p-600 text-p-600 bg-transparent hover:bg-p-600/10 active:bg-p-600/20",
        secondary: "bg-n-100 text-n-900 hover:bg-n-300 active:bg-n-300/80",
        ghost: "hover:bg-n-100 hover:text-n-900 active:bg-n-200",
        link: "text-p-600 underline-offset-4 hover:underline hover:text-p-700",
        hero: "gradient-cta text-white hover:opacity-90 hover:shadow-lg hover:shadow-p-600/30 active:opacity-80",
        accent: "bg-a-500 text-white hover:bg-a-600 active:bg-a-600/90 shadow-sm hover:shadow-md hover:shadow-a-500/30",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-base",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
