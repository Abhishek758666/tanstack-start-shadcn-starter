import type React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<title>AK Logo</title>

			{/* Letter A */}
			<path
				d="M6 26L11.5 6H13.8L19.3 26H17L15.8 21.5H9.5L8.3 26H6ZM10.1 19.5H15.2L12.65 9.8L10.1 19.5Z"
				fill="currentColor"
			/>

			{/* Letter K */}
			<path
				d="M21 6H23.3V15.2L29 6H31.5L25.2 15.8L31.8 26H29.1L23.3 17.1V26H21V6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
