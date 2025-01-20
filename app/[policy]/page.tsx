import { notFound } from 'next/navigation';
import { policies } from './policies';
import PolicyLayout from '@/components/PolicyLayout';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface PolicyPageProps {
  params: {
    policy: string;
  };
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const policy = policies[params.policy];
  if (!policy) return { title: 'Not Found' };

  return {
    title: `${policy.title} - Veil`,
  };
}

export default function PolicyPage({ params }: PolicyPageProps) {
  const policy = policies[params.policy];
  
  if (!policy) {
    notFound();
  }

  return (
    <PolicyLayout title={policy.title}>
      <ReactMarkdown>{policy.content}</ReactMarkdown>
    </PolicyLayout>
  );
} 