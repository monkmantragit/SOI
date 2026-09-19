import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/robotic-knee-replacement-surgeon-in-bangalore' },
  title: 'Robotic Knee Replacement Surgeon in Bangalore | Sports Ortho',
  description: 'Consult the top Robotic Knee Replacement Surgeon in Bangalore. Get advanced, precise knee surgery and faster recovery with expert orthopedic care',
};

const RoboticKneeReplacementPage = () => {
  // Define brand colors (example, adjust if actual colors are in a theme/config)
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
            Robotic Knee Replacement Surgeon in Bangalore
          </h1>

          {/* Introduction to Robotic Knee Replacement */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Introduction to Robotic Knee Replacement
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Are you struggling with severe knee pain that makes every step a challenge? Imagine having a knee replacement surgery so precise that you recover faster and get back to the activities you love sooner. <strong>Robotic knee replacement surgery</strong> is a cutting-edge procedure that can make this possible. It combines advanced robotic technology with the skill of a surgeon to perform knee replacement with exceptional accuracy. For patients, this means a more personalized fit of the new knee joint, often resulting in less pain and a quicker recovery compared to traditional methods. If you're looking for a <strong>Robotic Knee Replacement Surgeon in Bangalore</strong>, Dr. Naveen Kumar is a leading expert who can help. He uses state-of-the-art robotic systems along with years of orthopedic experience to ensure the best outcome for each patient.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              In a robotic knee replacement, the surgeon remains in full control, but the <strong>robotic system</strong> provides real-time guidance and feedback. Think of it as a high-tech assistant: it helps Dr. Naveen plan the surgery tailored to your knee's unique anatomy and ensures that the implant is positioned with pinpoint precision. Whether you need a <strong>robotic total knee replacement</strong> (replacing the entire knee joint) or a <strong>robotic partial knee replacement</strong> (replacing only the damaged part of the knee), this technology allows for an incredibly accurate procedure. Importantly, knee replacement is one of the most effective surgeries for relieving pain and restoring mobility. Robotic assistance takes this proven procedure to the next level by improving surgical accuracy and consistency for even better results. In the sections below, we explain when robotic knee replacement is needed, its benefits, what the surgery involves, the recovery process, and why <strong>Dr. Naveen Kumar</strong> is the right choice for robotic knee surgery in Bangalore.
            </p>
          </section>

          {/* Why Choose Dr. Naveen Kumar */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Why Choose Dr. Naveen Kumar for Robotic Knee Surgery in Bangalore
            </h2>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              When it comes to something as important as your knee health, you want to make sure you're in the best hands. Dr. Naveen Kumar (MBBS, MS Ortho, FRCS Orth [UK]) is a highly acclaimed orthopedic surgeon in Bangalore, and patients trust him for good reason. Here's why Dr. Naveen is the <strong>go-to specialist</strong> for robotic knee replacement surgery:
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Extensive Orthopedic Experience</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  With over a decade of experience in orthopedic and joint replacement surgeries, Dr. Naveen has performed hundreds of knee procedures. This depth of experience allows him to handle any surprises during surgery calmly and effectively.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Specialization in Robotic Surgery</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Dr. Naveen is specially trained in using advanced robotic systems for knee replacements. This means he has the expertise to leverage the technology for optimal precision and outcomes, ensuring you get the full benefits of robotic assistance.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Patient-Centric Approach</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  He believes in a personalized approach, taking the time to understand each patient's unique needs, lifestyle, and goals. Dr. Naveen ensures that you are fully informed and comfortable throughout the entire process, from consultation to recovery.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Access to Advanced Technology</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Dr. Naveen performs robotic knee replacements using the latest, most sophisticated robotic systems available in Bangalore. This commitment to using cutting-edge technology translates to better surgical precision and patient safety.
                </p>
              </div>
            </div>
          </section>

          {/* When is Robotic Knee Replacement Needed? */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              When is Robotic Knee Replacement Needed?
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Robotic knee replacement isn't for everyone, but it can be a game-changer for individuals suffering from specific knee conditions. Dr. Naveen Kumar will conduct a thorough evaluation, including a physical examination, medical history review, and imaging tests like X-rays or MRIs, to determine if this advanced procedure is right for you. Generally, you might be a candidate for robotic knee replacement if you experience:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Severe Knee Arthritis:</strong> Osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis that causes significant pain, stiffness, and loss of function which hasn't responded to conservative treatments.
              </li>
              <li>
                <strong>Failed Conservative Treatments:</strong> Non-surgical options like medication, physiotherapy, injections (such as <Link href="https://www.sportsorthopedics.in/procedure-surgery/prp-injection-platelet-rich-plasma/" target="_blank" rel="nofollow noopener noreferrer" className="font-medium hover:underline" style={{ color: brandColors.accent }}>PRP injections</Link> or <Link href="https://www.sportsorthopedics.in/procedure-surgery/stem-cell-therapy/" target="_blank" rel="nofollow noopener noreferrer" className="font-medium hover:underline" style={{ color: brandColors.accent }}>stem cell therapy</Link>), and lifestyle modifications no longer provide adequate relief.
              </li>
              <li>
                <strong>Significant Impact on Daily Life:</strong> Your knee pain limits your ability to perform everyday activities such as walking, climbing stairs, or even sleeping comfortably.
              </li>
              <li>
                <strong>Knee Deformity:</strong> Conditions like bow-leggedness or knock-knees that affect your alignment and gait.
              </li>
              <li>
                <strong>Desire for Precision and Optimal Outcomes:</strong> Patients who want the highest level of accuracy in implant placement to potentially enhance recovery and implant longevity.
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              It's also important to consider that a patient's overall health, bone quality, and activity goals play a role in deciding the best treatment path.
            </p>
          </section>

          {/* Benefits of Robotic Knee Replacement Surgery */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Benefits of Robotic Knee Replacement Surgery
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Choosing robotic knee replacement with an expert like Dr. Naveen Kumar offers several advantages over traditional knee replacement methods:
            </p>
            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Unmatched Precision and Accuracy</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  The robotic system provides a 3D model of your knee, allowing Dr. Naveen to plan the surgery with extreme detail. During the procedure, the robotic arm guides the surgeon to remove only the damaged bone and place the implant with sub-millimeter accuracy. This precision helps ensure optimal alignment and fit of the new knee joint.
                </p>
              </div>
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Potentially Faster Recovery</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Because robotic surgery is often less invasive and more precise, there can be less damage to surrounding soft tissues (muscles, ligaments). This may lead to reduced post-operative pain, less swelling, and a quicker return to daily activities for many patients.
                </p>
              </div>
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Reduced Pain and Discomfort</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  The accuracy of robotic surgery can minimize trauma to the bone and soft tissues, potentially leading to less pain after the operation and a reduced need for strong pain medications.
                </p>
              </div>
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Improved Implant Longevity</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Proper alignment and balancing of the knee implant are crucial for its long-term success. Robotic assistance helps achieve this optimal positioning, which may contribute to the implant lasting longer and functioning better over time.
                </p>
              </div>
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Customized Surgical Plan</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Robotic technology allows for a personalized surgical plan based on your unique anatomy. This tailored approach means the knee replacement is designed to fit and function as naturally as possible for you.
                </p>
              </div>
              <div className="p-4 sm:p-5 border rounded-md shadow-sm" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.lightGray + '40' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Less Blood Loss</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  The precision of the robotic system can lead to less disruption of blood vessels, potentially resulting in reduced blood loss during surgery and a lower chance of needing a blood transfusion.
                </p>
              </div>
            </div>
          </section>

          {/* The Robotic Knee Replacement Procedure: What to Expect */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              The Robotic Knee Replacement Procedure: What to Expect
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Undergoing robotic knee replacement surgery with Dr. Naveen Kumar involves several key steps, designed to ensure a smooth and successful experience:
            </p>
            <ol className="list-decimal pl-6 mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Pre-operative Planning:</strong> Before the surgery, a CT scan of your knee is taken. This scan is used to create a precise 3D virtual model of your knee. Dr. Naveen uses this model with the robotic software to plan the optimal size and position of your implant based on your specific anatomy.
              </li>
              <li>
                <strong>Anesthesia and Preparation:</strong> On the day of surgery, you will receive anesthesia (general or regional, as decided with your anesthesiologist). The surgical area will be cleaned and prepared.
              </li>
              <li>
                <strong>Robotic-Assisted Surgery:</strong> Dr. Naveen makes the incisions and uses the robotic arm to prepare the bone surfaces and implant the components. The robotic system provides real-time data and guidance, allowing for adjustments to ensure perfect alignment and balance of the ligaments around the knee.
              </li>
              <li>
                <strong>Implant Placement:</strong> The prosthetic components (femoral, tibial, and patellar, if needed) are precisely placed according to the pre-operative plan. The robotic system helps confirm the accuracy of the placement.
              </li>
              <li>
                <strong>Closure and Recovery:</strong> Once the implant is securely in place and the knee's stability and range of motion are checked, the incisions are closed. You will then be moved to a recovery room for monitoring.
              </li>
            </ol>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Throughout the procedure, Dr. Naveen is in full control; the robot acts as an advanced tool to enhance his skill and precision.
            </p>
          </section>

          {/* Recovery and Rehabilitation After Robotic Knee Replacement */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Recovery and Rehabilitation After Robotic Knee Replacement
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Recovery after robotic knee replacement is a crucial phase, and Dr. Naveen Kumar's team will provide a comprehensive rehabilitation plan tailored to you. Here's a general timeline:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Hospital Stay:</strong> Typically, patients stay in the hospital for 1-3 days. Early mobilization is encouraged, often starting the day of or the day after surgery with the help of a physical therapist.
              </li>
              <li>
                <strong>Pain Management:</strong> Medications will be prescribed to manage pain and discomfort.
              </li>
              <li>
                <strong>Physical Therapy:</strong> This is a cornerstone of recovery. You'll start with gentle exercises to improve range of motion and strength, gradually progressing to more challenging activities. Therapy may continue for several weeks to months, either at home or at a rehabilitation center.
              </li>
              <li>
                <strong>Return to Activities:</strong> Most patients can resume light daily activities within a few weeks. Driving may be possible after 4-6 weeks. A return to more strenuous activities or sports will depend on your progress and Dr. Naveen's guidance, usually taking several months.
              </li>
              <li>
                <strong>Follow-up Appointments:</strong> Regular follow-up visits with Dr. Naveen are essential to monitor your progress and ensure the knee is healing well.
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Adhering to the prescribed rehabilitation program is key to achieving the best possible outcome and enjoying the full benefits of your new knee.
            </p>
          </section>

          {/* Cost of Robotic Knee Replacement in Bangalore */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Cost of Robotic Knee Replacement in Bangalore
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              The cost of robotic knee replacement surgery in Bangalore can vary based on several factors, including the type of implant used, the hospital facilities, the complexity of the surgery, and the length of your hospital stay. While robotic surgery might have a slightly higher initial cost due to the advanced technology involved, the potential benefits such as faster recovery, reduced complications, and improved implant longevity can offer better long-term value.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              During your consultation with Dr. Naveen Kumar, you will receive a detailed breakdown of the estimated costs. His team can also assist with insurance queries and payment options.
            </p>
            <p className="leading-relaxed text-base sm:text-lg font-medium" style={{ color: brandColors.primary }}>
              Investing in your mobility and quality of life with a highly skilled surgeon like Dr. Naveen ensures you receive world-class care and the best possible outcome for your robotic knee replacement.
            </p>
          </section>

          {/* Frequently Asked Questions (FAQs) */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What is robotic knee replacement surgery?",
                  answer: "Robotic knee replacement surgery is an advanced procedure where a surgeon uses a robotic arm to assist in performing a knee replacement. This technology allows for greater precision in bone cuts and implant placement, potentially leading to better outcomes and faster recovery."
                },
                {
                  question: "What are the advantages of robotic knee replacement over traditional surgery?",
                  answer: "Advantages include increased precision, potentially less pain and scarring, faster recovery, and improved implant longevity due to better alignment."
                },
                {
                  question: "Who is a good candidate for robotic knee replacement?",
                  answer: "Candidates are typically those with severe knee arthritis (osteoarthritis, rheumatoid arthritis) or significant knee joint damage that hasn't responded to conservative treatments. A thorough evaluation by an orthopedic surgeon is necessary."
                },
                {
                  question: "How long does it take to recover from a robotic knee replacement?",
                  answer: "Recovery varies, but many patients experience a quicker initial recovery compared to traditional methods. Full recovery and return to all activities can take several months and depends on adherence to physical therapy."
                },
                {
                  question: "Is robotic knee replacement surgery safe?",
                  answer: "Yes, it is considered safe. The robotic system enhances the surgeon's ability to perform the procedure accurately, which can contribute to overall safety and reduce certain risks. As with any surgery, there are potential risks that your surgeon will discuss with you."
                },
                {
                  question: "What is the cost of robotic knee replacement surgery in Bangalore?",
                  answer: "The cost can vary based on the hospital, type of implant, and specific patient needs. It's best to consult with Dr. Naveen Kumar's office for a detailed cost estimate. While it might be slightly higher upfront, the potential for better outcomes and quicker recovery can offer long-term value."
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

          {/* Book Your Consultation */}
          <section className="text-center py-8 sm:py-10 bg-gray-100 rounded-lg shadow-md" style={{ backgroundColor: brandColors.lightGray }}>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6" style={{ color: brandColors.primary }}>
              Ready to Take the Next Step Towards a Pain-Free Knee?
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: brandColors.lightText }}>
              If chronic knee pain is holding you back, robotic knee replacement surgery with Dr. Naveen Kumar in Bangalore could be your solution. Experience the benefits of cutting-edge technology combined with expert surgical care.
            </p>
            <Link href="/book-appointment" legacyBehavior>
              <a className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-base sm:text-lg" style={{ backgroundColor: brandColors.accent, color: brandColors.background }}>
                Book Your Consultation Today
              </a>
            </Link>
          </section>

          {/* <p className="text-center text-lg sm:text-xl mb-8 sm:mb-12" style={{ color: brandColors.lightText }}>
            Detailed content about Robotic Knee Replacement will be populated here.
          </p> */}

        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default RoboticKneeReplacementPage; 