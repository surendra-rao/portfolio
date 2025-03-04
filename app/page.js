import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import OfficeProjects from './components/office-projects';
import Rank from "./components/rank";
import GitStats from "./components/stats";

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${userData.githubUser}`) //surendra-rao
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      <OfficeProjects />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      {/* <GitStats /> */}
      {/* <GitLanguage /> */}
      {/* <Rank /> */}
      {/* <Contributions /> */}
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();

  return {
    title: `Profile of ${profile.name}`,
    description: profile.description,
  };
};