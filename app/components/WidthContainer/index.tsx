function WidthContainer({ children, className, ...props }: any) {
	props["className"] = [
		"flex w-full items-center justify-between px-8 max-w-[1920px] mx-auto", //overflow-hidden
		className,
	].join(" ");
	return <div {...props}>{children}</div>;
}

export default WidthContainer;
