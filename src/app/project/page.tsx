
import { fetchProjectsByUserId } from '@/services/projectService'
import { cookies } from 'next/headers'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { redirect } from 'next/navigation'
import { fetchFoldersByUserId } from '@/services/folderService'
import ProjectsClient from '@/components/project/ProjectClient'
import NoProject from '@/components/project/NoProject'
import { auth } from '@/auth'



export default async function Page() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login');
  }
  const username = session.user.email as string;

  const projects = await fetchProjectsByUserId(username);
  const folders = await fetchFoldersByUserId(username);

  if (!projects || projects.length === 0) {
    return (
      <div className='h-full'>
        <Header />
        <div className="h-[74vh] md:h-[80vh]">
          <NoProject />
        </div>
        <Footer />
      </div>
    )
  }
  return (
    <div className='h-full'>
      <Header />
      <div className="h-[74vh] md:h-[80vh]">
        <ProjectsClient projects={projects} folders={folders}/>
      </div>
      <Footer />
    </div>
  )
}
