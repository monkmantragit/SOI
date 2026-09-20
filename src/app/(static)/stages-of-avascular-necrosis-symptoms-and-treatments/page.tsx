import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/stages-of-avascular-necrosis-symptoms-and-treatments' },
  title: 'Stages of Avascular Necrosis: Symptoms and Treatments',
  description: 'Learn about the stages of avascular necrosis, key symptoms, and effective treatment options to manage osteonecrosis and prevent joint damage.',
};

const StagesOfAvascularNecrosisPage = () => {
  const brandColors = {
    primary: '#2E3A59', // Example: Dark Blue/Charcoal for headings
    accent: '#8B5C9E',  // Example: Purple for links and accents
    text: '#333333',    // Example: Dark gray for body text
    lightText: '#555555', // Example: Lighter gray for secondary text
    background: '#FFFFFF',
    lightGray: '#F7FAFC', // For table header or subtle backgrounds
    success: '#4CAF50', // Green for success messages or icons
    warning: '#FFC107', // Amber for warnings or callouts
  };

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 sm:py-12" style={{ color: brandColors.text, backgroundColor: brandColors.background }}>
        <article className="prose lg:prose-xl max-w-none">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center" style={{ color: brandColors.primary }}>
            Stages of Avascular Necrosis: Symptoms and Treatments
          </h1>

          {/* Introduction Section */}
          <section className="mb-10 sm:mb-12">
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Unravel the mystery of avascular necrosis (AVN) as we explore its stages, symptoms, and treatments. Learn how early diagnosis can preserve joint health and enhance recovery options.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Understanding Avascular Necrosis Stages
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Avascular necrosis (AVN) is a condition that sneaks up on you. It happens when bone tissue dies because it doesn't get enough blood. This is a big deal, especially in places like the hip, knees, and shoulders. You might not notice it at first, but as it progresses, you'll start feeling more pain and stiffness in your joints.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Let's break it down. AVN moves through stages:
            </p>
            {/* Stages List */}
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Stage 1:</strong> No symptoms yet, but changes are happening inside.
              </li>
              <li>
                <strong>Stage 2:</strong> Mild pain begins, often when you're active.
              </li>
              <li>
                <strong>Stage 3:</strong> Pain becomes more pronounced, even when resting.
              </li>
              <li>
                <strong>Stage 4:</strong> Severe pain and potential joint collapse.
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding these stages helps you know what to expect and when to seek help. Early diagnosis is crucial. The earlier you catch it, the better your treatment options.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              We'll cover the symptoms to look out for and discuss the treatments available at each stage. From medications to advanced therapies like stem cell treatment, we&apos;ll guide you on how to manage the condition effectively. Whether it's understanding the stiffness in your hip or the lingering ache in your knee, this guide will help you navigate AVN with confidence.
            </p>
          </section>
          {/* End Introduction Section */}

          {/* What is AVN Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              What Is Avascular Necrosis?
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Avascular necrosis (AVN) is a condition where bone tissue dies because of a lack of blood supply. This can lead to the bone breaking down and eventually collapsing. It often affects weight-bearing joints like the hips, knees, and shoulders.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              The main cause of AVN is reduced blood flow to the bone. Without enough blood, the bone cells die, and the bone structure weakens. Over time, this can cause joint pain and limit movement. For those seeking detailed insights into AVN, including early diagnosis and treatment options, our <Link href="/bone-joint-school/avn-hip/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>AVN Hip Treatment page</Link> provides comprehensive information.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Several risk factors contribute to AVN. Trauma, such as fractures or dislocations, can damage blood vessels that supply the bone. Long-term use of high-dose steroids, often prescribed for conditions like asthma or rheumatoid arthritis, is another risk factor. Excessive alcohol consumption can also interfere with blood flow and lead to AVN.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Certain demographics are more at risk. Middle-aged individuals, particularly those with underlying health conditions like lupus or diabetes, are more susceptible. Men are more commonly affected than women. Lifestyle factors, such as obesity and smoking, increase the risk too.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding these causes and risk factors is crucial. Recognizing early symptoms can lead to prompt diagnosis and effective management. By addressing these risks, individuals can take proactive steps to maintain joint health and prevent further complications.
            </p>
          </section>
          {/* End What is AVN Section */}

          {/* Symptoms Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Symptoms of Avascular Necrosis at Each Stage
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Avascular necrosis (AVN) can be sneaky. It often starts quietly, but the symptoms become more noticeable as it progresses. Here's what to watch for at each stage.
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Stage 1:</strong> You might not feel anything unusual at first. There are no obvious symptoms, but changes are happening inside your bones. It's the calm before the storm.
              </li>
              <li>
                <strong>Stage 2:</strong> Mild pain starts to creep in, usually when you&apos;re active. You might notice a bit of stiffness, especially after a long day. The pain isn&apos;t constant, but it&apos;s enough to catch your attention.
              </li>
              <li>
                <strong>Stage 3:</strong> Pain becomes a regular visitor. It can show up even when you're resting, not just when you're on the move. You might feel it more when you put weight on the affected joint. It can radiate to nearby areas like the groin, thigh, or buttock.
              </li>
              <li>
                <strong>Stage 4:</strong> The pain is severe and hard to ignore. It can be constant, and the joint might feel like it&apos;s giving way. At this point, joint collapse is a real possibility.
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Recognizing symptoms early is crucial. Early intervention can prevent the condition from worsening. For those seeking comprehensive treatment options for AVN, including innovative techniques like Core Decompression with Stem Cell Therapy, our detailed guide on <Link href="/procedure-surgery/avascular-necrosis-hip-treatment/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>AVN hip treatment strategies in Bangalore</Link> offers valuable insights. Symptoms vary from person to person, so it's important to pay attention to any changes in your joints. By understanding what to look for, you can seek help before things get serious.
            </p>
          </section>
          {/* End Symptoms Section */}

          {/* Treatment Options Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Treatment Options for Avascular Necrosis
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Avascular necrosis (AVN) requires a precise approach to treatment, tailored to its stage and the patient&apos;s needs. We offer a variety of options, starting with nonsurgical treatments that aim to manage symptoms and slow progression.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              For early stages, physical therapy is often recommended. It helps maintain joint mobility and strength. Medications like NSAIDs can also reduce pain and inflammation. Osteoporosis drugs may be prescribed to support bone health.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              But if AVN progresses, surgical interventions might be necessary. One option is <strong>core decompression</strong>: This involves removing a portion of the inner bone to reduce pressure and improve blood flow. Another possibility is <Link href="/procedure-surgery/stem-cell-therapy/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>stem cell therapy</Link>, which promotes healing and regeneration of the affected bone tissue by utilizing regenerative treatment techniques.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              In advanced cases, where the joint is severely compromised, a <strong>joint replacement</strong> might be the best course. This involves replacing the damaged joint with an artificial one, often restoring mobility and reducing pain significantly.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Key treatments include:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Physical Therapy:</strong> Enhances joint function.
              </li>
              <li>
                <strong>Medications:</strong> NSAIDs for pain; osteoporosis drugs for bone strength.
              </li>
              <li>
                <strong>Core Decompression:</strong> Relieves pressure in the bone.
              </li>
              <li>
                <strong>Stem Cell Therapy:</strong> Aids in bone regeneration.
              </li>
              <li>
                <strong>Joint Replacement:</strong> Offers long-term relief for advanced AVN.
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding these treatments helps you know what to expect. Recovery varies, but our team at Sports Orthopedics Institute ensures that each patient receives care suited to their specific condition, supporting optimal recovery outcomes. For more detailed insights into AVN and related conditions, you can explore our <Link href="/publication/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>research publications</Link> that discuss various orthopedic health topics.
            </p>
          </section>
          {/* End Treatment Options Section */}

          {/* Image Section */}
          <section className="mb-10 sm:mb-12 flex justify-center">
            <Image 
              src="https://sportsorthopedics.in/wp-content/uploads/2025/01/e92dc3_a57562ec2c6f4456bbe688f0e226efedmv2.jpg" 
              alt="healthcare" 
              width={833} 
              height={555} 
              className="rounded-lg shadow-md"
            />
          </section>
          {/* End Image Section */}

          {/* Living with AVN Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Living with Avascular Necrosis
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Managing AVN involves lifestyle changes that can improve your quality of life. Keeping a healthy weight is crucial. Extra weight puts more stress on your joints, which can worsen symptoms. Eating a balanced diet and staying active can help you manage your weight effectively.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Incorporating low-impact exercises into your routine is beneficial. Activities like swimming, cycling, or walking help maintain joint health without adding excessive strain. These exercises can improve mobility and reduce pain. It's important to listen to your body and avoid pushing too hard.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Avoiding risk factors is key. Smoking and alcohol can impair blood flow and bone health, so steering clear of these can make a difference. If you need help quitting, consider reaching out to support groups or healthcare professionals.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Managing stress is also important for living with AVN. Stress can exacerbate pain and affect your overall well-being. Techniques like meditation, yoga, or deep breathing exercises can help you manage stress levels.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Regular check-ups with your healthcare provider are essential. They can monitor your condition and adjust treatments as needed. Staying informed about your health empowers you to make better decisions and maintain a good quality of life. For those dealing with joint issues, exploring <Link href="/publication/expert-advice-on-world-arthritis-day/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>expert insights on arthritis management</Link> can provide valuable information on prevention and treatment strategies. Small changes can have a big impact.
            </p>
          </section>
          {/* End Living with AVN Section */}

          {/* When to See a Doctor Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              When to See a Doctor?
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Recognizing when to see a doctor for avascular necrosis (AVN) is crucial. Early intervention can make a significant difference in managing this condition. Here are some signs that you should not ignore.
            </p>
            <p className="mb-2 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Persistent Pain:</strong> If you have ongoing pain in your hip, knee, or shoulder that doesn't improve with rest, it's time to consult a healthcare professional. This pain might start subtly but can become more pronounced over time.
            </p>
            <p className="mb-2 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Joint Stiffness:</strong> Noticeable stiffness, especially in the morning or after sitting for long periods, is a sign to watch for. If it limits your daily activities, seek medical advice.
            </p>
            <p className="mb-2 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Increased Discomfort with Activity:</strong> Pain that worsens with physical activity or weight-bearing might indicate AVN progression. If this discomfort starts affecting your daily routine or sporting activities, you should get it checked out.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Range of Motion Issues:</strong> Difficulty moving the joint through its full range can be an early warning sign. If you're experiencing this, a medical evaluation is essential.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Ignoring these signs can lead to severe consequences. Delays in diagnosis and treatment can worsen the prognosis, potentially leading to joint collapse. Early diagnosis of AVN allows for more treatment options, which can slow progression and improve outcomes.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At Sports Orthopedics Institute, we emphasize the importance of early diagnosis. Our accurate diagnosis techniques ensure that you receive the most reliable assessment of your joint health. For those experiencing knee-related issues, understanding the <Link href="/knee-pain-in-athletes" className="font-medium hover:underline" style={{ color: brandColors.accent }}>causes and treatment options for knee pain in athletes</Link> can be beneficial. By addressing symptoms promptly, you can take control of your health and explore effective treatment strategies.
            </p>
          </section>
          {/* End When to See a Doctor Section */}

          {/* Recap Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Recap and Key Takeaways
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Reflecting on avascular necrosis (AVN), it's clear how vital early detection and treatment are. The stages, from silent beginnings to severe pain, remind us to stay vigilant. Spotting symptoms early means more treatment options and better outcomes.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Key points to remember:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Stages Matter:</strong> Understanding each stage helps in knowing what to expect and when to seek help.
              </li>
              <li>
                <strong>Symptom Awareness:</strong> Pain and stiffness, especially in joints like the hip, need attention.
              </li>
              <li>
                <strong>Treatment Options:</strong> From physical therapy to surgery, knowing the options can guide your journey. For further insights into surgical techniques, you can explore our collection of <Link href="/clinical-videos/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>clinical videos by Dr. Naveen Kumar L V</Link> that offer detailed explanations on various orthopedic conditions and treatments.
              </li>
            </ul>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Lifestyle changes play a role in managing AVN. Maintaining a healthy weight, engaging in low-impact exercises, and avoiding smoking and excessive alcohol are crucial. These steps support joint health and may slow the condition's progression. Stress management techniques like meditation and yoga can also be beneficial.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At Sports Orthopedics Institute, our focus is on accurate diagnosis and tailored treatments. We aim to equip you with the knowledge and resources to tackle AVN effectively. Understanding these insights forms the foundation of managing avascular necrosis with confidence and competence.
            </p>
          </section>
          {/* End Recap Section */}

          {/* FAQ Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              FAQs About Avascular Necrosis
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "Is Avascular Necrosis reversible?",
                  answer: "AVN rarely reverses. Early detection and treatment can slow its progress and maintain joint function. Medications, core decompression, and stem cell therapy help manage symptoms and improve outcomes. Complete reversal is uncommon."
                },
                {
                  question: "Can AVN be prevented?",
                  answer: "While not all cases of AVN can be prevented, managing risk factors can reduce the likelihood. This includes limiting alcohol intake, using corticosteroids cautiously under medical supervision, avoiding trauma to the bones where possible, and managing underlying medical conditions that can affect blood flow."
                },
                {
                  question: "What is the recovery time after AVN surgery?",
                  answer: "Recovery time depends on the specific AVN surgery performed and your overall health. After procedures like core decompression or stem cell therapy, a gradual return to activities is expected over several months. A total joint replacement, if needed, typically requires a few months of rehabilitation to regain mobility and strength. Your surgeon will provide a personalized recovery plan."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '20' }}>
                  <AccordionTrigger className="p-4 sm:p-5 text-left font-medium hover:no-underline" style={{ color: brandColors.primary }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 sm:p-5 pt-0 text-sm sm:text-base" style={{ color: brandColors.lightText }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          {/* End FAQ Section */}

          {/* Final Concluding Paragraph */}
          <p className="leading-relaxed text-base sm:text-lg mt-8" style={{ color: brandColors.lightText }}>
            AVN needs careful management and understanding. We focus on giving you knowledge and personalized care. We commit to accurate diagnosis and advanced treatment to help you achieve the best outcome. Knowing about AVN helps you take active steps to manage your condition.
          </p>

        </article>
      </main>
      <SiteFooter />
    </>
  );
};
export default StagesOfAvascularNecrosisPage; 