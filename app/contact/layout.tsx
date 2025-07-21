export default function ContactLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Contact Us</h1>
            {children}
        </div>
    )
}