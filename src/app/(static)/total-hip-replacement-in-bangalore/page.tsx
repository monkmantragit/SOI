import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/total-hip-replacement-in-bangalore' },
  title: 'Total Hip Replacement in Bangalore | Expert Surgeon',
  description: 'Looking for total hip replacement in Bangalore? Top-rated surgeons, modern facilities & personalized care near you. Contact us today!',
};

const TotalHipReplacementPage = () => {
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
            Total Hip Replacement in Bangalore | Expert Surgeon
          </h1>

          {/* Introduction: What Is Total Hip Replacement? */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Introduction: What Is Total Hip Replacement?
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <strong>Total Hip Replacement (THR)</strong> or <em>hip arthroplasty</em> is a surgical procedure in which the damaged ball-and-socket structure of the hip joint is replaced with high-quality artificial components. The natural hip joint consists of the femoral head (the ball) and the acetabulum (the socket). When these surfaces are worn out due to arthritis, injury, or disease, they cause pain, stiffness, and difficulty in movement.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              THR restores normal joint mechanics using prosthetic implants made of metal alloys, ceramics, and medical-grade polyethylene. These components replicate the function of a healthy hip, reduce pain, and dramatically improve mobility and quality of life.
            </p>
            <p className="mt-4 mb-2 sm:mt-6 sm:mb-3 text-base sm:text-lg font-semibold" style={{ color: brandColors.text }}>
              Conditions that benefit from hip replacement surgery include:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                <strong>Osteoarthritis</strong> (age-related joint wear)
              </li>
              <li>
                <strong>Avascular Necrosis (AVN)</strong> (loss of blood supply to the femoral head)
              </li>
              <li>
                <strong>Rheumatoid Arthritis</strong> (autoimmune inflammation)
              </li>
              <li>
                <strong>Post-traumatic arthritis or injury-related degeneration</strong>
              </li>
              <li>
                <strong>Hip dysplasia</strong> or congenital deformities
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              If you're dealing with persistent hip pain that limits walking, standing, or sleeping — or using walking aids to move around — hip replacement might be the most effective solution.
            </p>
          </section>

          {/* Why Choose Dr. Naveen Kumar for Hip Replacement in Bangalore? */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Why Choose Dr. Naveen Kumar for Hip Replacement in Bangalore?
            </h2>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Dr. Naveen Kumar L.V. is among Bangalore's most qualified and experienced joint replacement surgeons. With an emphasis on clinical precision, advanced surgical technique, and patient comfort, he ensures each patient receives comprehensive care.
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: hourglass-start-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Expertise & Qualifications</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Dr. Naveen holds over 10 international orthopedic credentials including FRCS (England), MCh in Hip & Knee Surgery (UK), and is known for bringing global standards of joint care to Bangalore.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: running-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Sports Injury Specialist</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  With international qualifications (FRCS Orth, MCh, Dip. Sports Medicine), Dr. Naveen specializes in treating athletes and active individuals.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: connectdevelop */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Advanced Techniques & Technology</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Dr. Naveen uses advanced methods – including cemented, cementless, and dual-mobility implants — to match the patient's age, bone density, and lifestyle.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: check-square-o */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Extensive Experience</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  He has performed thousands of hip and knee replacements with outstanding clinical outcomes, making him a leading authority in complex primary and revision hip surgeries.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: hand-holding-heart-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Personalized care</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  At Sports Orthopedics Institute, HSR Layout, Dr. Naveen and his team offer personalized care, clearly explaining your hip condition and treatment options from day one.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-200" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon placeholder: search-location-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Seamless Recovery Support</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Post-op care includes tailored physiotherapy plans, pain management strategies, and nutritional guidance for faster healing.
                </p>
              </div>
            </div>
            
            {/* Further content for this section will be added here */}
            <p className="leading-relaxed text-base sm:text-lg mt-8" style={{ color: brandColors.lightText }}>
              Serving patients from <strong>HSR Layout</strong>, <strong>Koramangala</strong>, <strong>Sarjapur Road</strong>, <strong>Bellandur</strong>, <strong>BTM Layout</strong>, <strong>Electronic City</strong>, and <strong>Indiranagar</strong>, Sports Orthopedics is known for delivering world-class outcomes in a patient-friendly setting.
            </p>

          </section>

          {/* When Is Total Hip Replacement Required? */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              When Is Total Hip Replacement Required?
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Total hip replacement is typically recommended when other treatments — like oral medications, steroid injections, or physiotherapy — no longer provide adequate pain relief or joint function. It is especially important for patients whose quality of life is severely affected by hip conditions.
            </p>
            <p className="mb-2 sm:mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              You may be a suitable candidate for hip replacement surgery if you:
            </p>
            <ul className="list-disc pl-6 mb-4 sm:mb-6 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              <li>
                Experience <strong>chronic hip or groin pain</strong> that interferes with daily activities like walking, climbing stairs, or sitting
              </li>
              <li>
                Have <strong>difficulty sleeping or resting comfortably</strong> due to persistent pain
              </li>
              <li>
                Notice <strong>increased stiffness or reduced range of motion</strong> in your hip
              </li>
              <li>
                Suffer from a visible or noticeable <strong>limp</strong> or rely heavily on walking sticks or walkers
              </li>
              <li>
                Have <strong>radiological evidence</strong> of joint degeneration, such as cartilage loss, femoral head collapse (as in AVN), or osteophyte formation
              </li>
              <li>
                Struggle with tasks such as putting on shoes, standing from a seated position, or getting in and out of vehicles
              </li>
            </ul>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              It's important to note that delaying surgery can lead to worsening joint deformities, muscle wasting, and more complex recovery. Early surgical intervention, when appropriate, allows for better implant positioning, faster healing, and an easier return to normal activity.
            </p>
          </section>

          {/* Types of Hip Conditions We Treat */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Types of Hip Conditions We Treat
            </h2>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At Sports Orthopedics, we provide comprehensive evaluation and treatment for a wide range of hip joint disorders. These conditions, if left untreated, can significantly impair mobility and overall quality of life. Understanding these conditions in depth can help you recognize symptoms early and seek timely medical care.
            </p>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                1. Osteoarthritis of the Hip
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Osteoarthritis is the most common reason for hip replacement. It is a degenerative joint disease that causes the cartilage cushioning the bones to wear away over time. As the cartilage deteriorates, the bones rub against each other, leading to pain, stiffness, and reduced range of motion. Patients often experience difficulty walking, climbing stairs, or performing daily activities. Osteoarthritis usually develops with age but can be accelerated by prior injuries or a sedentary lifestyle.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                2. Avascular Necrosis (AVN) of the Hip
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Also known as osteonecrosis, AVN occurs when blood supply to the femoral head (the ball of the hip joint) is disrupted, leading to bone death and structural collapse. AVN can develop due to trauma, long-term steroid use, alcohol abuse, or unknown causes. Early stages may present as mild discomfort, but the pain intensifies as the condition progresses, eventually requiring surgical intervention. If diagnosed early, AVN may be managed with joint-preserving techniques; however, advanced cases often necessitate total hip replacement.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                3. Rheumatoid Arthritis
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Rheumatoid arthritis is an autoimmune condition that causes chronic inflammation of the joint lining, resulting in pain, swelling, and joint erosion. Unlike osteoarthritis, which is due to wear and tear, rheumatoid arthritis is systemic and can affect multiple joints. In the hip, it leads to stiffness, persistent discomfort, and structural damage. THR is often recommended when medications and physical therapy no longer provide relief.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                4. Post-Traumatic Arthritis
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                This form of arthritis results from previous injury to the hip joint — such as a fracture, dislocation, or ligament damage. The trauma disrupts joint alignment and damages cartilage, which accelerates degenerative changes. Post-traumatic arthritis may not surface immediately but often manifests years after the original injury. Patients typically report persistent pain, reduced flexibility, and instability.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                5. Infective Arthritis (Septic Arthritis)
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Infective arthritis occurs when a bacterial, viral, or fungal infection invades the hip joint, leading to inflammation and tissue damage. It may occur due to bloodstream infections, surgeries, or injections around the joint. If not treated promptly, it can destroy the cartilage and joint surface, leaving patients with long-term stiffness and pain. In chronic or post-infective cases, hip replacement may be necessary to restore function.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                6. Hip Dysplasia
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Developmental Dysplasia of the Hip (DDH) is a condition where the hip socket is abnormally shallow, making it difficult for the femoral head to stay in place. It is usually diagnosed in infancy but may remain unnoticed until adulthood when it presents as pain or limited movement. Dysplasia leads to early-onset arthritis due to joint instability. Surgical correction, including hip replacement, is often required in adults with advanced dysplasia-related degeneration.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Other Less Common Conditions
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <li>
                  <strong>Inflammatory Arthropathies:</strong> Such as lupus or ankylosing spondylitis
                </li>
                <li>
                  <strong>Paget's Disease of Bone:</strong> A chronic bone disorder affecting joint integrity
                </li>
                <li>
                  <strong>Bone Tumors or Cysts:</strong> Rare but significant causes of joint destruction
                </li>
              </ul>
            </div>

            <p className="mb-4 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Each condition requires a tailored approach. At Sports Orthopedics, Dr. Naveen Kumar uses detailed diagnostic imaging and personalized treatment plans to determine the best course of action — whether it be conservative care, joint preservation, or total hip replacement surgery.
            </p>
            <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              If you're experiencing hip discomfort or mobility issues, an accurate diagnosis is the first step toward recovery. Book a consultation with our specialist team to begin your journey toward a healthier, more mobile future.
            </p>
          </section>

          {/* The Procedure: What to Expect */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              The Procedure: What to Expect
            </h2>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              Understanding what to expect before, during, and after your total hip replacement can ease anxiety and help you prepare mentally and physically for a smooth recovery journey.
            </p>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Before Surgery
              </h3>
              <p className="mb-2 sm:mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Preparation begins with a thorough medical evaluation:
              </p>
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <li>
                  A complete <strong>clinical assessment</strong>, along with <strong>X-rays or MRI</strong>, helps confirm the extent of joint damage and decide the implant type.
                </li>
                <li>
                  Your existing health conditions such as diabetes, hypertension, or anemia will be addressed and optimized to minimize surgical risk.
                </li>
                <li>
                  You&apos;ll meet the <strong>anesthetist</strong> to decide between spinal anesthesia or general anesthesia based on your medical profile.
                </li>
                <li>
                  We recommend <strong>prehabilitation exercises</strong>, which are specific routines aimed at strengthening the muscles around your hip before surgery. This often results in quicker post-op recovery and better mobility.
                </li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                During Surgery
              </h3>
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <li>
                  The surgery typically takes <strong>2 to 2.5 hours</strong> under sterile operation theater conditions.
                </li>
                <li>
                  The damaged <strong>femoral head</strong> (ball) and acetabulum (socket) are removed and replaced with prosthetic components made of metal, ceramic, and medical-grade plastic.
                </li>
                <li>
                  Based on age and bone quality, your surgeon will decide on <strong>cemented or cementless fixation</strong>.
                </li>
                <li>
                  After verifying joint alignment and mobility, the incision is closed with sutures or staples, and a sterile dressing is applied.
                </li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                After Surgery: Immediate Recovery
              </h3>
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <li>
                  Within <strong>4 to 6 hours</strong>, patients are encouraged to begin gentle ankle pumps and foot movements to stimulate circulation and prevent clots.
                </li>
                <li>
                  On <strong>Day 1</strong>, you will receive assistance to sit upright and may begin bedside mobility or short walks with a walker under physiotherapist guidance.
                </li>
                <li>
                  <strong>Day 2 onwards</strong>, walking short distances with support and guided exercises begin.
                </li>
                <li>
                  Most patients are discharged by <strong>Day 3 to 5</strong>, depending on pain levels, wound healing, and confidence in walking.
                </li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Recovery Timeline at Home
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <strong>Week 1–2:</strong> Use a walker for mobility, follow the home exercise program, get your wound checked and dressing changed around Day 10–12, and avoid twisting, bending forward, or sitting in low chairs.
              </p>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <strong>Week 3–6:</strong> Gradually shift from walker to stick, increase walking distance, begin light household chores, and start physiotherapy if advised.
              </p>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <strong>Week 6–12:</strong> Walk independently with ease, perform more advanced exercises, and resume light work or recreational activities.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <strong>Month 3 and beyond:</strong> Resume most normal activities like driving, travel, and walking, while avoiding high-impact sports unless cleared for low-impact options like swimming, cycling, or yoga.
              </p>
            </div>
          </section>

          {/* Benefits of Hip Replacement Surgery in Bangalore */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Benefits of Hip Replacement Surgery in Bangalore
            </h2>
            <p className="mb-4 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              A successful <strong>Total Hip Replacement</strong> is more than just a surgical procedure — it's often a turning point in a person's life. Whether you're suffering from osteoarthritis, AVN, or injury-related hip damage, the surgery can significantly enhance your physical function, mental well-being, and quality of life.
            </p>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
              At <strong>Sports Orthopedics Bangalore</strong>, Dr. Naveen Kumar has helped hundreds of patients walk pain-free again and reclaim their independence. Here's how:
            </p>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Say Goodbye to Persistent Hip and Groin Pain
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                One of the biggest benefits of hip replacement surgery is <strong>complete relief from chronic pain</strong>. Whether your pain is localized to the hip, groin, or radiates to the knee, replacing the damaged joint with a smooth-functioning implant eliminates the root cause of the discomfort.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Patients who struggled for years with pain while walking, sitting, or sleeping often describe the transformation as "instant relief."
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Regain Lost Mobility and Improve Posture
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Stiff hips limit your movement and affect your balance. After a hip replacement, patients often regain their ability to walk, bend, climb stairs, and even sit cross-legged — activities that were once impossible. Improved hip alignment also corrects posture issues and can reduce the need for walking aids over time.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                If you're based in <strong>Bangalore</strong> and have been relying on a stick or walker due to stiffness or instability, hip replacement can help you walk confidently again.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Return to Everyday Activities — and the Ones You Love
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Many of our patients return to doing things they had given up on for years: walking in the park, riding a two-wheeler, gardening, swimming, or even going on short treks.
              </p>
              <p className="mb-2 sm:mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                With guided physiotherapy and follow-ups, you can safely resume:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1 sm:space-y-2 text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                <li>
                  Long walks or nature trails in places like <strong>Lalbagh</strong> or <strong>Cubbon Park</strong>
                </li>
                <li>
                  Recreational sports like <strong>badminton or yoga</strong>
                </li>
                <li>
                  Travel around Bangalore or outstation visits without discomfort
                </li>
              </ul>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Your active life doesn't have to end with hip pain — in fact, this surgery often marks the beginning of a more mobile future.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Correction of Leg Length Discrepancies
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Chronic hip issues can sometimes cause a difference in leg length, which may affect gait and lead to lower back problems. During Total Hip Replacement surgery, such discrepancies are often corrected, or significantly reduced, helping restore your natural walking rhythm and symmetry.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                At Sports Orthopedics, we use advanced planning and surgical precision to ensure post-op alignment is optimal.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Long-Lasting, Durable Implants
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Modern hip implants made from <strong>ceramic, titanium, or cobalt-chrome alloys</strong> are designed to last <strong>15 to 25 years or more</strong>, depending on your lifestyle and bone health. This means that in most cases, the implant can serve you for life — especially if the surgery is done at the right time, before major bone damage occurs.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Patients in their 40s, 50s, and even 60s often benefit long-term without requiring a revision.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Better Sleep and Emotional Health
              </h3>
              <p className="mb-3 leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Chronic pain often affects sleep quality and mental well-being. Many patients report <strong>improved sleep</strong>, less irritability, and a renewed sense of emotional stability within weeks of surgery.
              </p>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Getting a good night's sleep, being able to walk without support, and regaining your independence can have a profound impact on mental health, especially for elderly patients who've been housebound or dependent on others for daily tasks.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>
                Life-Changing Confidence and Freedom
              </h3>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: brandColors.lightText }}>
                Perhaps the most powerful benefit is the <strong>confidence patients gain post-surgery</strong>. From being unable to walk across a room to confidently walking unaided into a family gathering — the shift is not just physical, but deeply emotional.
              </p>
            </div>

          </section>

          {/* FAQ Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 text-center border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  1. What is Total Hip Replacement and who needs it?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Total Hip Replacement (THR) is a surgical procedure where the damaged parts of the hip joint are removed and replaced with artificial components made of metal, ceramic, or high-grade plastic. It's primarily recommended for patients suffering from <strong>severe hip arthritis</strong>, <strong>Avascular Necrosis (AVN)</strong>, or <strong>rheumatoid arthritis</strong> when pain and stiffness interfere with daily life.
                    </p>
                    <p>
                      If you're based in Bangalore and experiencing <strong>chronic hip pain</strong>, limited mobility, or night pain that hasn't improved with medications or physiotherapy, consulting a hip replacement specialist like <strong>Dr. Naveen Kumar</strong> at Sports Orthopedics HSR Layout is a good first step.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  2. When should I consider hip replacement surgery in Bangalore?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Many people delay seeing a specialist until the pain becomes unbearable. You should consider visiting a <strong>hip replacement doctor in Bangalore</strong> if:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pain persists even while resting</li>
                      <li>You have difficulty walking or climbing stairs</li>
                      <li>Pain disturbs your sleep</li>
                      <li>You can't perform daily tasks like sitting cross-legged or bending</li>
                    </ul>
                    <p>
                      If you're around <strong>HSR Layout, Koramangala, Sarjapur Road, Indiranagar, Marathahalli, or BTM Layout</strong>, Sports Orthopedics is centrally located and accessible for an expert opinion.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  3. What are the benefits of getting hip replacement surgery in Bangalore at a specialized center?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Opting for hip replacement at a specialized orthopedic center in Bangalore like <strong>Sports Orthopedics</strong> gives you access to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Minimally invasive surgical techniques</li>
                      <li>Personalized pre- and post-op care</li>
                      <li>Quicker recovery and early mobility</li>
                      <li>Advanced pain management protocols</li>
                      <li>Specialized physiotherapy</li>
                    </ul>
                    <p>
                      Bangalore also has some of India's most advanced medical facilities and experienced orthopedic surgeons like <strong>Dr. Naveen</strong>, who ensures quality care with international standards.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  4. What is the recovery timeline after hip replacement surgery?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Here's a quick overview of what to expect:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Day 1–2:</strong> You'll begin gentle ankle and knee exercises, and possibly take your first steps with support.</li>
                      <li><strong>Week 2–3:</strong> Most patients are walking with a walker or stick. Stitches are removed by end of Week 2.</li>
                      <li><strong>Week 4–6:</strong> You'll be able to perform most basic activities and may resume light household work.</li>
                      <li><strong>3 Months Onward:</strong> With physiotherapy, you can return to normal activities including walking without support, driving, and climbing stairs.</li>
                    </ul>
                    <p>
                      Recovery varies for each patient, but timely physiotherapy and expert guidance ensure optimal healing.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  5. Can I resume daily activities after hip replacement?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Yes, the goal of hip replacement is to <strong>restore pain-free movement</strong> and help you return to your routine. Activities like walking, driving, sitting cross-legged, and light exercises are typically resumed gradually over 2–3 months. High-impact sports should be avoided unless cleared by your surgeon.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  6. How long do hip implants last? Will I need another surgery later?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      Modern hip implants typically last <strong>15 to 20 years</strong> or more, depending on your activity levels, weight, and health. Many patients live the rest of their lives without needing another surgery. However, if the implant loosens or wears out (known as implant failure), a <strong>revision hip replacement</strong> may be needed.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg" style={{ borderColor: brandColors.accent + '30', backgroundColor: brandColors.background }}>
                <AccordionTrigger className="p-4 sm:p-6 text-left font-medium text-base sm:text-lg hover:no-underline" style={{ color: brandColors.primary }}>
                  7. What are the risks involved in Total Hip Replacement?
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                    <p>
                      While hip replacement is generally safe, like any surgery, there are some potential risks:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Infection</li>
                      <li>Blood clots</li>
                      <li>Implant loosening</li>
                      <li>Dislocation</li>
                      <li>Leg length difference</li>
                    </ul>
                    <p>
                      Choosing an experienced <strong>hip surgeon in Bangalore</strong> significantly reduces the chances of complications. Dr. Naveen takes special care in patient preparation and surgical precision to ensure safety and long-term results.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Call to Action Section */}
          <section className="py-10 sm:py-16 text-center bg-gray-50" style={{ backgroundColor: brandColors.lightGray }}>
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6" style={{ color: brandColors.primary }}>
                Ready to Discuss Your Hip Replacement Options?
              </h2>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: brandColors.lightText }}>
                If persistent hip pain is affecting your quality of life, take the first step towards recovery. Dr. Naveen Kumar and the team at Sports Orthopedics Institute are here to provide expert consultation and personalized treatment plans.
              </p>
              <Link href="/book-appointment" className="inline-block px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-medium text-white rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: brandColors.accent }}>
                Book Your Consultation
              </Link>
            </div>
          </section>

        </article>
      </main>
      <SiteFooter />
    </>
  );
};
export default TotalHipReplacementPage; 