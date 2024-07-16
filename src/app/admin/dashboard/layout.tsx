export default function Layout({
    children,
    resume,
    analytics,
}: any) {
    return (
        <>
            {children}
            {resume}
            {analytics}
        </>
    )
}