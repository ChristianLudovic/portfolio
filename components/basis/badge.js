export default function Badge({children, ...props}) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-solid border border-stone-200">
            <div className="w-2 h-2 rounded-full bg-dark">

            </div>
            <span {...props}>{children}</span>
        </div>
    );
}