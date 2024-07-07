const Wrapper = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="isolate flex min-h-screen flex-col">
            {children}
        </div>
    )
}
export default Wrapper