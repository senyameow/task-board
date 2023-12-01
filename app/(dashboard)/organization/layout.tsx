'use client'
import Sidebar from "../_components/Sidebar";

const OrganizationLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl~ mx-auto">
            <div className="flex gap-x-5">
                <div className="w-64 hidden md:block shrink-0">
                    <Sidebar />
                </div>
                <main>
                    {children}
                </main>
            </div>
        </main>
    )
}

export default OrganizationLayout;