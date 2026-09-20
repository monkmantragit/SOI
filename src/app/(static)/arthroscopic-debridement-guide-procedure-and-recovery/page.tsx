import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/arthroscopic-debridement-guide-procedure-and-recovery' },
  title: 'Arthroscopic Debridement Guide: Procedure and Recovery',
  description: 'Learn about arthroscopic debridement, its procedure, benefits, and recovery timeline. Discover how this minimally invasive surgery relieves joint pain.',
};

const ArthroscopicDebridementPage = () => {
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
            Arthroscopic Debridement Guide: Procedure and Recovery
          </h1>

          {/* Introduction Section */}
          <section className="mb-10 sm:mb-12">
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Curious about recovering swiftly from joint issues? Learn how arthroscopic debridement can offer minimal scarring and quicker rehabilitation for an active lifestyle.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Understanding Arthroscopic Debridement
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement is a minimally invasive procedure aimed at removing damaged, infected, or nonviable tissue from joints. Using an arthroscope, surgeons can precisely target and remove problematic tissue, promoting healing and encouraging the regeneration of healthy tissue. It's typically recommended when non-surgical treatments haven't provided the desired relief.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              What makes arthroscopic debridement appealing? For starters, it offers a quicker recovery and minimal scarring compared to traditional open surgeries. Patients can often return to their normal activities much sooner, which is a significant advantage for those with active lifestyles.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4" style={{ color: brandColors.primary }}>Key Benefits:</h3>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li><strong>Minimally Invasive:</strong> Smaller incisions lead to faster recovery times and less visible scarring.</li>
              <li><strong>Precision:</strong> The arthroscope allows surgeons to see inside the joint and remove only the damaged tissue, preserving healthy structures.</li>
              <li><strong>Recovery:</strong> Patients experience less post-operative pain and can often leave the hospital the same day.</li>
              <li><strong>When to Consider:</strong> Ideal for those whose symptoms persist despite trying non-invasive treatments like physical therapy or medication.</li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding the procedure and its benefits is crucial for anyone considering arthroscopic debridement. It's a step towards a more active and pain-free lifestyle, backed by advanced surgical techniques.
            </p>
          </section>

          {/* Conditions Treated Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Conditions Treated by Arthroscopic Debridement
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement treats various joint issues. It helps with <strong>osteoarthritis</strong>, a degenerative joint disease that causes cartilage wear, pain, and stiffness. This procedure removes loose cartilage or bone fragments, easing discomfort and improving joint movement.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              The technique also addresses <strong>cartilage damage or loose bodies</strong> in joints. These problems can stem from injury or normal wear and tear, causing pain and restricted movement. By removing these obstructions, arthroscopic debridement restores smoother joint function. For those interested in more specialized cartilage treatments, our <Link href="/procedure-surgery/chondroplasty/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>chondroplasty procedures</Link> offer advanced solutions for localized cartilage loss or tears.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              For <strong>torn meniscus or ligament injuries</strong>, this procedure is crucial. Meniscus tears, common in athletes, can lead to joint instability. Arthroscopic debridement allows us to trim or repair torn areas, reducing pain and enhancing stability. Additionally, our <Link href="/procedure-surgery/arthroscopy-knee/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>knee arthroscopy services</Link> are designed to address complex knee issues such as ACL tears, providing comprehensive care for athletes.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Synovitis</strong>, inflammation of the joint lining, responds well to this technique. The procedure reduces inflammation by cleaning out inflamed tissue, alleviating pain and improving mobility.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              By treating these conditions, arthroscopic debridement helps patients return to active lives. We tailor each procedure to our patients' needs, ensuring the best results and quick recovery.
            </p>
          </section>

          {/* Preparing for Surgery Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Preparing for Arthroscopic Debridement
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Got arthroscopic debridement coming up? Here's what you need to know before heading into surgery.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Pre-procedure consultation</strong>: Chat openly with your doctor. Discuss your symptoms, treatment history, and any concerns you might have. It's your chance to understand the procedure, so ask questions and clarify doubts. For a broader understanding of the various orthopedic procedures we offer, including arthroscopic surgeries, you might find our <Link href="/procedure-surgery" className="font-medium hover:underline" style={{ color: brandColors.accent }}>detailed list of surgeries and procedures</Link> helpful.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Diagnostic tests</strong>: Imaging tests, like X-rays or MRIs, help pinpoint the problem. Sometimes, lab tests are needed to ensure you're fit for surgery. Your doctor will guide you on which tests to take.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Pre-surgery instructions</strong>: Your doctor will give you specific guidelines. Fasting is usually required, so no eating or drinking for a set period before surgery. They'll also advise you on medications – some might need to be paused.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>What to expect on the day of surgery</strong>: Arrive early to complete any necessary paperwork. You'll change into a hospital gown and meet your surgical team. They'll review the procedure and answer last-minute questions. Once you're prepped, anesthesia is administered, and the surgery begins.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              It's all about being prepared and informed. With clear communication and following your doctor's instructions, you're setting yourself up for a smoother experience.
            </p>
          </section>

          {/* Image Section 1 */}
          <section className="mb-10 sm:mb-12 flex justify-center">
            <Image 
              src="https://sportsorthopedics.in/wp-content/uploads/2025/01/e92dc3_602bfe79dad24bbfae7716b65631f3fcmv2.jpg" 
              alt="Arthroscopic Debridement procedure illustration" 
              width={833} 
              height={555} 
              className="rounded-lg shadow-lg"
            />
          </section>

          {/* Procedure Details Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              The Arthroscopic Debridement Procedure
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement is a precise procedure that demands careful preparation and execution. Start with <strong>pre-surgery preparations</strong>. You'll need to fast; no food or drink for a specific period before your surgery. Medical reviews are crucial, so expect some tests to ensure you're ready for the procedure.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              On the day, you'll receive <strong>anesthesia</strong>. Depending on your case, it could be local, regional, or general. This ensures you won't feel discomfort during the surgery. Once you're under, the joint space is expanded using a sterile fluid, providing the surgeon with a clear view inside the joint. If you're dealing with shoulder issues, you might also consider learning more about <Link href="/procedure-surgery/arthroscopy-shoulder/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>shoulder arthroscopy procedures</Link>, which offer minimally invasive solutions for various shoulder problems.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Next, small <strong>incisions are made</strong>. These allow the insertion of the arthroscope and other surgical instruments. The surgeon will examine the joint, identifying and removing damaged tissue. Precision is key, ensuring only the problematic areas are addressed while preserving healthy tissue.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              After the procedure, careful <strong>closure and bandaging</strong> are performed. This minimizes scarring and helps prevent infection. Post-surgery, our focus shifts to <strong>pain management</strong>. You'll receive medications to manage discomfort and instructions for a smooth recovery.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              The process is structured to ensure safety and effectiveness. By following each step diligently, we aim for a successful outcome and a rapid return to your daily activities.
            </p>
          </section>

          {/* Recovery and Rehabilitation Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Recovery and Rehabilitation
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Recovery after arthroscopic debridement is an important phase. Expect mild to moderate pain and swelling for several weeks. Walking is usually possible the same day, but follow specific guidelines to resume activities safely.
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li><strong>Activity Resumption:</strong> Start with gentle movements. Gradually increase activity levels as advised by your doctor. Avoid strenuous activities until fully cleared.</li>
              <li><strong>Physical Therapy:</strong> Rehabilitation is key. Participate in physical therapy sessions to regain strength and mobility. Follow the therapist&apos;s plan to meet recovery milestones. For those recovering from sports-related injuries, our sports injury rehabilitation services in Bangalore offer a comprehensive approach to restore fitness and mobility.</li>
              <li><strong>Diet Considerations:</strong> Eat a balanced diet rich in proteins and vitamins. Nutrients support tissue healing and recovery. Stay hydrated to aid the healing process.</li>
              <li><strong>Medication Management:</strong> Use prescribed pain relievers as needed. Anti-inflammatory medications may help reduce swelling. Follow dosing instructions carefully.</li>
              <li><strong>Monitoring Recovery:</strong> Keep track of progress. Report any unusual symptoms to your doctor promptly. Follow-up appointments are essential for monitoring healing.</li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At Sports Orthopedics Institute, we support your recovery journey with comprehensive rehabilitation services. Our in-house physiotherapists guide you through safe and effective recovery strategies. Follow these steps to get back on your feet as quickly as possible.
            </p>
          </section>

          {/* Related Treatments Section (Interpreted from HTML structure) */}
          <section className="mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4" style={{ color: brandColors.primary }}>Related Treatment Options for Joint Health:</h3>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li><strong>Physical Therapy:</strong> Enhances joint function.</li>
              <li><strong>Medications:</strong> NSAIDs for pain; osteoporosis drugs for bone strength.</li>
              <li><strong>Core Decompression:</strong> Relieves pressure in the bone.</li>
              <li><strong>Stem Cell Therapy:</strong> Aids in bone regeneration.</li>
              <li><strong>Joint Replacement:</strong> Offers long-term relief for advanced AVN.</li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding these treatments helps you know what to expect. Recovery varies, but our team at Sports Orthopedics Institute ensures that each patient receives care suited to their specific condition, supporting optimal recovery outcomes. For more detailed insights into AVN and related conditions, you can explore our <Link href="/publications" className="font-medium hover:underline" style={{ color: brandColors.accent }}>research publications</Link> that discuss various orthopedic health topics.
            </p>
          </section>

          {/* Image Section 2 */}
          <section className="mb-10 sm:mb-12 flex justify-center">
            <Image 
              src="https://sportsorthopedics.in/wp-content/uploads/2025/01/e92dc3_36b89fd84edb4281aee2598e372f7f51mv2.jpg" 
              alt="Visual guide or infographic about Arthroscopic Debridement" 
              width={833} 
              height={555} 
              className="rounded-lg shadow-lg"
            />
          </section>

          {/* Expected Outcomes and Benefits Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Expected Outcomes and Benefits
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement improves mobility and relieves pain. Patients experience better joint function and less discomfort, making daily activities easier.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Recovery time varies. You'll have some swelling and discomfort at first, but these usually fade within weeks. You can often start walking and light activities soon after surgery. Follow your doctor's advice on increasing activity levels.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement often produces good results. Many patients see significant improvements in joint function and pain reduction. This procedure works well for minor joint issues that haven't improved with non-surgical treatments.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Typical outcomes include better movement and less joint stiffness. After recovery, patients often find sports and physical activities easier. Keep in mind that results can differ based on your specific condition and overall health.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At Sports Orthopedics Institute, we provide specialized care tailored to each patient. Our expert team supports you throughout recovery, helping you safely return to an active lifestyle. For those with more severe joint damage, we also offer <Link href="/procedure-surgery/arthrodesis-joint-fusion/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>joint fusion surgery</Link> to alleviate persistent pain and stiffness, ensuring comprehensive orthopedic care.
            </p>
          </section>

          {/* Risks and Final Thoughts Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Risks and Final Thoughts
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement is a safe procedure, but it has some risks like any surgery.
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li><strong>Infection:</strong> Infections are rare. We follow strict sterilization protocols and provide clean wound care instructions to reduce this risk.</li>
              <li><strong>Bleeding:</strong> Some bleeding is normal, but excessive bleeding is uncommon. Our surgical team takes steps to manage this.</li>
              <li><strong>Nerve Damage:</strong> This rarely happens. Our surgeons use precise techniques to protect your nerves.</li>
            </ul>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding these risks helps you make informed decisions about your care. Follow your doctor's advice and post-operative care plan for a smooth recovery.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Arthroscopic debridement is a minimally invasive solution that aims for faster recovery and less pain. It treats various joint issues, making it a good option if you have ongoing discomfort. Proper preparation and understanding of the recovery process will help you manage your joint health better. For those dealing with shoulder issues, learning more about procedures like <Link href="/procedure-surgery/subacromial-decompression/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>subacromial decompression for shoulder impingement</Link> can provide additional insights into surgical options available.
            </p>
          </section>

          {/* When to Consult a Specialist Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              When to Consult a Specialist
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Not sure if you need arthroscopic debridement? Watch for signs like persistent joint pain, swelling, or limited mobility that don't improve with rest or medication. If you're experiencing these symptoms, it's time to consider consulting a specialist.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Choosing the right orthopedic surgeon is crucial. Look for a professional with a strong track record in arthroscopic procedures and a specialization in sports injuries. At Sports Orthopedics Institute, we've got a team led by Dr. Naveen Kumar L.V., known for his expertise and international experience. Our surgeons are skilled in advanced techniques, ensuring you receive top-notch care. For more information on our comprehensive services and Dr. Naveen's expertise, visit our <Link href="/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>Sports Orthopedics Institute page</Link>.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Preparing for your first consultation is simple. Gather your medical history, including any previous treatments or surgeries. Note down your symptoms and any questions you have. This information helps the specialist understand your condition better and recommend the best treatment plan. During the consultation, discuss your symptoms openly. Ask about the procedure, recovery time, and potential outcomes. Our specialists will guide you through the process, addressing any concerns you have. This initial meeting is a great opportunity to understand your options and make informed decisions about your joint health.
            </p>
          </section>

          {/* FAQs Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              FAQs About Arthroscopic Debridement
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  id: "faq1",
                  question: "Is the procedure painful?",
                  answer: "Not really. You'll be under anesthesia, so you won't feel anything during the surgery. Post-surgery, some discomfort and swelling are normal, but these can be managed with prescribed pain medication."
                },
                {
                  id: "faq2",
                  question: "How long does recovery take?",
                  answer: "Recovery varies from person to person. Typically, most patients start feeling better within a few weeks. Full recovery might take a few months, depending on your condition and adherence to post-operative care."
                },
                {
                  id: "faq3",
                  question: "Will I need physical therapy?",
                  answer: "Yes, physical therapy plays a crucial role in your recovery. It helps restore strength and mobility in the joint. Our in-house physiotherapists will guide you through a tailored rehab plan to get you back to your usual activities."
                },
                {
                  id: "faq4",
                  question: "Can the procedure be repeated if needed?",
                  answer: "In some cases, yes. If symptoms persist or reoccur, a repeat procedure might be considered. It's best to discuss this with your surgeon to understand your specific situation."
                }
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '20' }}>
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

          {/* Concluding Paragraph */}
          <p className="mt-8 sm:mt-12 text-center text-lg sm:text-xl leading-relaxed" style={{ color: brandColors.text }}>
            At Sports Orthopedics Institute, we focus on delivering top-notch care and support throughout your recovery. Our team is here to ensure you regain your active lifestyle with confidence and ease.
          </p>

        </article>
      </main>
      <SiteFooter />
    </>
  );
};
export default ArthroscopicDebridementPage; 