
import { fetchProjectsByUserId } from '@/services/projectService'
import { cookies } from 'next/headers'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { redirect } from 'next/navigation'
import { fetchFoldersByUserId } from '@/services/folderService'
import ProjectsClient from '@/components/project/ProjectClient'
import NoProject from '@/components/project/NoProject'



export default async function Page() {
  // const usernameData = cookies().get('username');
  const usernameData = 'test@test.com'
  if (!usernameData) {
    redirect('/login');
  }
  // const username = usernameData.value;
  const username = usernameData

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
