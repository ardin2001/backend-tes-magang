export default function layout({ children,coba,detail }: {
    children: React.ReactNode,
    coba: React.ReactNode,
    detail: React.ReactNode
}) {
    return (
        <>
            {children}
            {coba}
            {detail}
        </>
    )
}