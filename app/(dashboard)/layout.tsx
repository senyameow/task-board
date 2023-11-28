import Navbar from "./organization/[organizationId]/_components/Navbar";

const DashBoardLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="">
                {children}
            </main>
        </div>
    )
}

export default DashBoardLayout;