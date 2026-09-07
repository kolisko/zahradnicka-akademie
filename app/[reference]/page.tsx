import { notFound } from 'next/navigation';
import Wiki from '@/components/wiki';
const views: Record<string, string> = { atlas: 'atlas', kompetence: 'competencies', slovnik: 'glossary', 'redakcni-pravidla': 'editorial' };
export default async function ReferencePage({ params }: { params: Promise<{ reference: string }> }) {
  const { reference } = await params;
  if (!Object.hasOwn(views, reference)) notFound();
  return <Wiki key={reference} initialView={views[reference]} />;
}
