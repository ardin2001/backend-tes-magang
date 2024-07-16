export default function Layout({
    children,
    detail,
}: {
    children: React.ReactNode,
    detail: React.ReactNode,
}) {
    return (
        <>
            {children}
            {detail}
        </>
    )
}