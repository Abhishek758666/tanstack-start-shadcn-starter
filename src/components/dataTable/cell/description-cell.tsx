import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface DescriptionCellProps {
	title: string;
	className?: string;
}

export default function DescriptionCell({
	title,
	...props
}: DescriptionCellProps) {
	return (
		<Text
			{...props}
			variant="base"
			className={cn(
				"line-clamp-1 group inline-flex text-left justify-start items-center gap-2.5 w-full",
				props.className,
			)}
			title={title}
			as="div"
		>
			<p className="leading-6">{title}</p>
		</Text>
	);
}
