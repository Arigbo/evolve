import { TopicNavCrumbs } from "@/components/topicNavCrumbs";

export default function TopicLayout({ children }) {
  return (
    <>
      <TopicNavCrumbs />
      {children}
    </>
  );
}
