const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="h-full bg-slate-100 flex flex-col">

            {/* <Navbar /> */}

            <main className="pt-40 pb-20 flex-1">
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    )
}

export default Layout;