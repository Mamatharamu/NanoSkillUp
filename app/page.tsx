import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, Code2, Sparkles, Users } from "lucide-react";
import { courses, testimonials, stats } from "@/lib/data";

export default function Home() {
  return <>
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"><Sparkles size={16}/> Industry-focused learning</div>
          <h1 className="text-5xl font-black leading-tight md:text-6xl">Learn. Build. <span className="gradient-text">Transform Your Career.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Master in-demand technology skills through practical courses, real-world projects, interview preparation and expert guidance.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link className="btn btn-primary" href="/courses">Explore Courses <ArrowRight className="ml-2" size={18}/></Link><Link className="btn btn-secondary" href="/success-stories">See Success Stories</Link></div>
        </div>
        <div className="card bg-gradient-to-br from-blue-600 to-violet-600 p-8 text-white">
          <div className="grid grid-cols-2 gap-4">
            {[
              [Code2,"Hands-on Projects"],[BriefcaseBusiness,"Career Focused"],[Users,"Expert Guidance"],[BookOpen,"Structured Learning"]
            ].map(([Icon,label],i)=><div key={i} className="rounded-2xl bg-white/10 p-5 backdrop-blur"><Icon size={28}/><p className="mt-4 font-bold">{label as string}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{stats.map(s=><div key={s.label} className="card p-6 text-center"><div className="text-3xl font-black">{s.value}</div><div className="mt-1 text-sm text-slate-500">{s.label}</div></div>)}</div>
    </section>

    <section className="bg-slate-50 py-16">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-4"><div><p className="font-bold text-blue-600">LEARN WHAT MATTERS</p><h2 className="mt-2 text-3xl font-black">Featured Courses</h2></div><Link href="/courses" className="font-bold text-blue-600">View all →</Link></div>
        <div className="grid gap-6 md:grid-cols-3">{courses.slice(0,3).map(c=><CourseCard key={c.slug} course={c}/>)}</div>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-center text-3xl font-black">Why Learn With Us?</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{["Industry-focused curriculum","Real-world projects","Interview & career preparation","Beginner-friendly explanations","Practical assignments","Continuous mentor guidance"].map(x=><div className="card p-6" key={x}><CheckCircle2 className="text-blue-600"/><h3 className="mt-4 font-bold">{x}</h3><p className="mt-2 text-sm text-slate-500">Learn through structured content designed around practical outcomes.</p></div>)}</div>
    </section>

    <section className="bg-slate-950 py-16 text-white">
      <div className="container"><h2 className="text-3xl font-black">Learner Success Stories</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{testimonials.map(t=><div className="rounded-2xl bg-white/10 p-6" key={t.name}><p className="leading-7 text-slate-200">“{t.quote}”</p><div className="mt-6 font-bold">{t.name}</div><div className="text-sm text-slate-400">{t.role}</div></div>)}</div></div>
    </section>

    <section className="container py-20 text-center"><h2 className="text-4xl font-black">Ready to upgrade your skills?</h2><p className="mx-auto mt-4 max-w-xl text-slate-600">Choose a course, start building practical skills and take the next step in your career.</p><Link className="btn btn-primary mt-7" href="/courses">Start Learning</Link></section>
  </>;
}

function CourseCard({course}: {course: typeof courses[number]}) {
  return <div className="card overflow-hidden"><div className="bg-gradient-to-br from-blue-600 to-violet-600 p-7 text-white"><div className="text-sm font-semibold">{course.category}</div><h3 className="mt-2 text-2xl font-black">{course.title}</h3></div><div className="p-6"><p className="text-sm leading-6 text-slate-600">{course.description}</p><div className="mt-5 flex flex-wrap gap-2">{course.technologies.slice(0,3).map(x=><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold" key={x}>{x}</span>)}</div><Link className="mt-6 inline-block font-bold text-blue-600" href={`/courses/${course.slug}`}>View course →</Link></div></div>
}