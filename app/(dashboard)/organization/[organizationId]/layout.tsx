import { Control } from "./_components/Control";

const OrganizationLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Control />
            {children}
        </>
    )
}

export default OrganizationLayout;