import { notFound } from 'next/navigation';
import { policies } from './policies';
import PolicyLayout from '@/components/PolicyLayout';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

type PolicyPageProps = {
  params: Promise<{ policy: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const param = await params;
  const policyData = policies[param.policy];
  if (!policyData) return { title: 'Not Found' };

  return {
    title: `${policyData.title} - Veil`,
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const param = await params;
  const policy = policies[param.policy];

  if (!policy) {
    notFound();
  }

  return (
    <PolicyLayout title={policy.title}>
      <ReactMarkdown>{policy.content}</ReactMarkdown>
    </PolicyLayout>
  );
}
