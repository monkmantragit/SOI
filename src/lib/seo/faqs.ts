/**
 * Bangalore-specific FAQs for the homepage (the old ones referenced US Medicare,
 * which is irrelevant to an Indian practice). Rendered visibly on the homepage and
 * emitted as FAQPage structured data.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const HOMEPAGE_FAQS: Faq[] = [
  {
    question: 'Where is Sports Orthopedics Institute located in Bangalore?',
    answer:
      'We are in HSR Layout, Bengaluru — 1084, 2nd Floor, Shirish Foundation, 14th Main, 18th Cross, Sector 3, HSR Layout, Bengaluru 560102. We are easily reached from Koramangala, Sarjapur Road, Bellandur and Electronic City.',
  },
  {
    question: 'Who is the lead orthopedic surgeon at Sports Orthopedics Institute?',
    answer:
      'Dr Naveen Kumar L V (MBBS, MS Orthopedics, KMC 51965) leads the practice. He specialises in ACL reconstruction, knee and shoulder arthroscopy, joint replacement and sports injury treatment, and is rated 5.0 across 1,533 patient stories on Practo.',
  },
  {
    question: 'What conditions and surgeries do you treat?',
    answer:
      'We treat ACL and meniscus tears, rotator cuff and shoulder problems, knee and hip arthritis (including robotic and total joint replacement), sports injuries, and general orthopedic conditions of the knee, shoulder, hip, ankle, elbow and wrist.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can call or WhatsApp us on +91 63645 38660, use the “Book an Appointment” button on this site, or message us on WhatsApp. Consultations are by appointment, Monday to Saturday, 9:00 AM to 6:00 PM.',
  },
  {
    question: 'Do you offer second opinions before surgery?',
    answer:
      'Yes. Many patients come to us for a second opinion on whether surgery is needed for ACL, meniscus, rotator cuff or arthritis problems. Dr Naveen will review your reports and explain the non-surgical and surgical options clearly.',
  },
];
