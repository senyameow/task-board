import { auth, OrganizationSwitcher } from '@clerk/nextjs'
import Navbar from './components/Navbar';


const OrganizationPage = () => {

    const { orgId, userId, orgRole } = auth()
    return (
        <div className='w-full h-full '>
            organization
        </div>
    )
}

export default OrganizationPage;