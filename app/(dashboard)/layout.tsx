import Navbar from "./organization/[organizationId]/components/Navbar";

const DashBoardLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
        </div>
    )
}

export default DashBoardLayout;