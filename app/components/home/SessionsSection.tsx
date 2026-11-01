import UpcomingSessions from "./UpcomingSessions";
import PastSessionsArchive from "./PastSessionsArchive";

export default function SessionsSection() {
  return (
    <section id="sessions" className="border-b border-border py-16 md:py-24">
      <UpcomingSessions />
      <PastSessionsArchive />
    </section>
  );
}

