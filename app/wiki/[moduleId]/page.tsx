import { notFound } from 'next/navigation';
import Wiki from '@/components/wiki';
import { modules } from '@/lib/curriculum';
export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const module = modules.find((item) => item.id === moduleId);
  return { title: module ? `${module.title} | Zahradnická akademie` : 'Kapitola nenalezena' };
}
export default async function ChapterPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  if (!modules.some((item) => item.id === moduleId)) notFound();
  return <Wiki key={moduleId} initialView={moduleId} />;
}
