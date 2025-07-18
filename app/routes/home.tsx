import NavBar from '@/app/components/NavBar';
import type { Route } from './+types/home';
import { resumes } from '@/contstants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind' },
    { name: 'description', content: 'Smart feedback for your dream job!' },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <NavBar />
      <section className='main-section'>
        <div className='page-heading'>
          <h1>Track Your Applications And Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>
      {resumes.map((resume) => (
        <div>
          <h1>{resume.jobTitle}</h1>
        </div>
      ))}
    </main>
  );
}
