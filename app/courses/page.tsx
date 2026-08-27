import { courses } from "@/lib/data";
import Link from "next/link";

export default function CoursesPage() {
  return <main className="container py-16">
    <p className="font-bold text-blue-600">COURSE CATALOG</p><h1 className="mt-2 text-4xl font-black">Build skills that move your career forward.</h1>
    <p className="mt-4 max-w-2xl text-slate-600">Explore practical technology programs designed for beginners and working professionals.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{courses.map(c=><article className="card overflow-hidden" key={c.slug}><div className="bg-slate-950 p-7 text-white"><span className="text-sm text-blue-300">{c.category}</span><h2 className="mt-2 text-2xl font-black">{c.title}</h2></div><div className="p-6"><p className="text-sm text-slate-600">{c.description}</p><div className="mt-4 text-sm font-semibold text-slate-500">{c.duration} · {c.level}</div><div className="mt-4 flex flex-wrap gap-2">{c.technologies.map(t=><span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{t}</span>)}</div><Link href={`/courses/${c.slug}`} className="btn btn-primary mt-6 w-full">View Course</Link></div></article>)}</div>
  </main>
}