import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const textVariants = cva("whitespace-normal", {
	variants: {
		variant: {
			"heading-1":
				"text-[20px] leading-[24px] sm:text-[26px] sm:leading-[28px] lg:text-[30px] lg:leading-[32px] [font-feature-settings:'liga'_off,_'clig'_off]",
			"heading-2":
				"text-[18px] leading-[24px] sm:text-[20px] sm:leading-[28px] lg:text-[24px] lg:leading-[32px]",
			large:
				"text-[14px] leading-[20px] sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px]",
			base: "text-[14px] leading-[16px] [font-feature-settings:'ss01'_on,_'cv01'_on]",
			small:
				"text-[12px] leading-[16px] [font-feature-settings:'ss01'_on,_'cv01'_on]",
			xsmall:
				"text-[10px] leading-[16px] [font-feature-settings:'ss01'_on,_'cv01'_on]",
			"extra-large":
				"text-[16px] leading-[20px] sm:text-[17px] sm:leading-[22px] lg:text-[18px] lg:leading-[24px]",
		},
	},
	defaultVariants: {
		variant: "base",
	},
});

type TextElement =
	| HTMLParagraphElement
	| HTMLHeadingElement
	| HTMLSpanElement
	| HTMLDivElement;

interface TextProps
	extends HTMLAttributes<TextElement>,
		VariantProps<typeof textVariants> {
	balanced?: boolean;
	as?: React.ElementType;
	ref?: React.Ref<TextElement>;
}

function Text({
	as: Component = "p",
	className,
	children,
	variant,
	ref,
	...props
}: TextProps) {
	return (
		<Component
			className={cn(textVariants({ variant }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Component>
	);
}

Text.displayName = "Text";

export { Text, textVariants };
