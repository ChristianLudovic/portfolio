export default function Badge({children, ...props}) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-solid border border-stone-200 px-2" {...props}>
            <span>{children}</span>
        </div>
    );
}