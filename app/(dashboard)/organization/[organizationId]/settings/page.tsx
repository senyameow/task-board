import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="">
            <OrganizationProfile appearance={{
                elements: {
                    rootBox: {
                        height: '100%',
                        width: '100%',
                        boxShadow: 'none'
                    },
                    card: {
                        boxShadow: 'none',
                        border: '1px solid #e5e5e5'
                    }

                }
            }} />
        </div>
    )
}

export default SettingsPage;