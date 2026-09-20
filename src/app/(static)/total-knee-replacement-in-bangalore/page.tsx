import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/total-knee-replacement-in-bangalore' },
  title: 'Total Knee Replacement in Bangalore | Expert Surgeon',
  description: 'Get advanced total knee replacement in Bangalore with expert surgeons and cutting-edge care. Book a consultation today for pain-free mobility',
};

const TotalKneeReplacementPage = () => {
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

  const faqData = [
    {
      question: "When is knee arthritis surgery (total knee replacement) needed?",
      answer: "Knee replacement is typically recommended when arthritis has severely damaged the knee joint and conservative treatments (like medications, injections, physiotherapy, bracing) no longer provide relief. Signs that you might need this surgery include chronic pain even at rest or at night, major trouble with mobility (like difficulty walking or climbing stairs), and X-rays showing advanced arthritis (bone rubbing on bone). Essentially, if your knee pain is reducing your quality of life and you've tried other treatments without success, it may be time to consider total knee replacement. It's often called \"arthritis knee surgery\" because it is the definitive solution for end-stage knee arthritis. Dr. Naveen will assess your condition thoroughly – if you're in early stages of arthritis, he might suggest non-surgical measures; if you're in an advanced stage (Stage 3 or 4 arthritis), knee replacement can significantly improve your pain and function."
    },
    {
      question: "How do I choose the best knee replacement surgeon in Bangalore for my surgery?",
      answer: "Choosing a surgeon can be confusing with so many options. Here are a few tips: look for a surgeon's experience and credentials (how many knee replacements have they done? are they specialized in joint replacement? do they have advanced training or international fellowships?). Patient testimonials and reviews can tell you about others' experiences. It's also important that you feel comfortable with the surgeon – do they listen to your concerns and explain things clearly? In Bangalore, you'll find several renowned orthopedic surgeons. Dr. Naveen Kumar L.V. is often cited among the best knee surgeons in Bangalore, given his extensive training in the UK, 24+ years of experience, and hundreds of happy patient outcomes. He is a joint replacement surgeon who focuses not just on the surgical procedure but also on your pre- and post-operative care (which is just as important for success). Ultimately, the \"best\" surgeon for you will be someone who is highly skilled and whom you trust. We encourage you to have a consultation, ask questions, and then make an informed decision. (Our patients frequently mention that Dr. Naveen's approachable nature and clear explanations were a big factor in choosing him.)"
    },
    {
      question: "Is knee replacement surgery painful? What about pain after the surgery?",
      answer: "It's normal to worry about pain – nobody likes to suffer! The good news is that while you will have some pain after knee replacement, it is manageable and temporary. During the surgery, you won't feel anything due to anesthesia. After surgery, modern pain management techniques ensure you stay as comfortable as possible. At Sports Orthopedics, we use a combination of methods: nerve blocks, epidurals or spinal anesthesia, and pain medications. Most patients rate their pain as moderate in the first few days, improving quickly over the first 1-2 weeks. Pain after knee replacement is often different from the arthritis pain you had – surgical pain diminishes each day, whereas arthritis pain would have persisted or worsened without surgery. We'll provide you with medications (like anti-inflammatories and mild opioids if needed) to control pain, and our team will monitor you closely. By around two weeks, many patients are on simple painkillers or even just occasional tablets. Also, remember that physical therapy helps reduce pain in the long run by strengthening muscles and improving flexibility. So yes, there is some discomfort after surgery, but we make sure it's well-controlled. And most importantly, that post-op pain is a sign of healing and will soon be replaced by the absence of the old crippling knee pain."
    },
    {
      question: "How soon can I walk after knee replacement surgery?",
      answer: "Much sooner than most people expect! In our protocol (and many modern hospitals), patients begin walking with assistance within a day or two after surgery​. Typically, the day after your surgery, you'll stand up and take a few steps with a walker under the guidance of a physiotherapist. By the second day, you're likely walking to the bathroom or down the corridor with support. Early walking is encouraged because it kickstarts your recovery – it helps blood circulation and prevents stiffness. Of course, you won't be jogging right away – you'll use a walker or crutches for a couple of weeks for stability. Most patients can walk independently (without a walker) by around 2-3 weeks after a total knee replacement​, and with a cane if needed for a bit longer. Each person's timeline is slightly different, but the key point is: you won't be bedridden. Our goal is to get you back on your feet safely and quickly. By 6 weeks, you'll likely be walking normally (perhaps even earlier for partial knee replacements). Dr. Naveen and the physio team will ensure you have the confidence and strength to walk as early as possible, while always prioritizing safety to avoid falls."
    },
    {
      question: "What is the typical recovery time, and when can I get back to normal life?",
      answer: "Recovery from knee replacement happens in stages. The initial recovery (hospital stay and first two weeks) is focused on healing the incision and getting basic mobility with a walker. By about 4-6 weeks, most patients have made big strides: the surgical wound has healed, pain is much less, knee movement is improving (you might be bending 90-120°), and you can do many daily activities like walking around the house, shopping, or light chores. By 3 months, you'll likely feel pretty \"normal\" – you can walk longer distances, climb stairs with alternate feet, and have returned to hobbies like swimming or cycling (low-impact activities). Many people are able to resume work (if it's a desk job, even earlier – around 4-6 weeks; if it's a more active job, closer to 2-3 months). Full recovery – in terms of strength and endurance – can take up to 6 months to a year. This is when you see the last bits of improvement in muscle strength and fine tuning of balance. Remember, everyone's timeline is a bit different. Age and fitness level play a role – a younger, fit person might bounce back faster, whereas someone older or with other health issues may progress more gradually. The great thing is, knee replacement continues to improve your comfort and ability for up to a year post-op, so even if you're not 100% at 3 months, you will likely be even better at 6 or 12 months. And \"normal life\" is the goal – things like walking without fear of pain, enjoying outings, traveling, and playing with grandkids become easy again. Dr. Naveen will give you specific guidance on any activities to avoid (for example, we generally advise against high-impact pounding activities like running or jumping to protect the new knee). But for most patients, by a few months after surgery, you're back to doing almost everything you love – just without the pain"
    },
    {
      question: "How long will my knee implant last? Will I ever need another surgery?",
      answer: "Knee implants are quite durable. Most knee replacements last 15-20 years or more​. In fact, studies show that about 90% of knee replacements are still functioning well 15 years post-surgery, and around 80-85% last 20-25 years or longer​. This means if you get a knee replacement in your 60s or 70s, it will likely serve you for the rest of your life. If you are younger (say, in your 40s or 50s) when you get the surgery, you may outlive your implant and need a revision in the distant future. The need for a second surgery (revision) depends on factors like how much you use your knee, your weight, and whether any complications occur. The most common reason for a very long-term failure is wear and tear – the plastic spacer can wear down over time. But with modern materials and better techniques (like improved alignment via robotic surgery), implants are lasting longer than ever. Dr. Naveen uses high-quality, proven implants designed for longevity. We also schedule check-ups every couple of years even long after recovery, to monitor your knee. If a problem ever arises (like loosening or increasing pain after many years), we catch it early. The bottom line is, knee replacement is a long-lasting solution for arthritis – for the vast majority of patients it is a one-time surgery that provides decades of relief. And should you ever require a revision, you'll be in expert hands, as Dr. Naveen is experienced in complex revision surgeries too."
    }
  ];

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 sm:py-12" style={{ color: brandColors.text, backgroundColor: brandColors.background }}>
        <article className="prose lg:prose-xl max-w-none">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center" style={{ color: brandColors.primary }}>
            Total Knee Replacement in Bangalore | Expert Surgeon
          </h1>

          {/* Introduction Section */}
          <section className="mb-10 sm:mb-12">
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Don't let knee pain hold you back.</strong> Regain your mobility and live pain-free with advanced knee replacement surgery by <Link href="/surgeons-staff/dr-naveen-kumar-l-v/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>Dr. Naveen Kumar L.V</Link>. in Bangalore's Sports Orthopedics Institute. Our compassionate team is here to guide you from initial consultation to full recovery.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Book an Appointment to take the first step towards pain-free knees.</strong>
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Introduction: Knee Replacement and Who Needs It
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              If you're in Bangalore (Koramangala, BTM Layout, <strong>HSR Layout</strong>, Bellandur, Sarjapur Road, Electronic City, Marathahalli, or Indiranagar) and suffering from severe knee pain or arthritis, know that help is available. <strong><Link href="/procedure-surgery/knee-replacement/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>Total knee replacement</Link></strong> – also known as knee arthroplasty or <em>arthritis knee surgery</em> – is a procedure to replace a damaged knee joint with an artificial joint made of metal and high-grade plastic. This <strong>new knee joint</strong> takes over the work of your worn-out cartilage and bone, allowing smooth, pain-free movement. Knee replacement is one of the most successful surgeries in modern medicine, providing significant pain relief and improved mobility for most patients. It's considered a safe procedure with a very low complication rate (serious issues occur in fewer than 2% of patients)​, and over 90% of modern knee implants still work well <strong>15+ years</strong> after surgery​.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4 pb-1 sm:pb-2 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              <strong>Who might need a knee replacement?</strong>
            </h3>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              Knee replacement is typically recommended for people with <strong>advanced knee arthritis or serious joint damage</strong>. If you have <strong>osteoarthritis</strong> or <strong>rheumatoid arthritis</strong> causing constant knee pain, stiffness, and difficulty with everyday activities, you might be a candidate for this surgery. Common reasons to consider knee replacement include:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3" style={{ color: brandColors.lightText }}>
              <li><strong>Severe arthritis pain:</strong> Osteoarthritis (age-related wear and tear) or rheumatoid arthritis (inflammatory) can lead to bone-on-bone contact in the knee, causing intense pain and deformity. When pain persists despite medications, physiotherapy, and injections, <strong><Link href="/bone-joint-school/knee-arthritis/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>knee arthritis surgery</Link></strong> (replacement) may be the best solution.<br /></li>
              <li><strong>Limited mobility:</strong> Difficulty in walking, climbing stairs, or getting up from chairs due to knee pain or stiffness. You may find you're avoiding activities you enjoy because your knee just won't cooperate.<br /></li>
              <li><strong>Night pain or rest pain:</strong> Pain that keeps you awake at night or aches even when you're not moving is a red flag. It means the joint damage is quite severe.<br /></li>
              <li><strong>Bent or deformed knee joint:</strong> Long-standing arthritis can cause the knee to bow inward or outward. Total knee replacement can straighten the leg and correct these deformities, improving your gait.<br /></li>
              <li><strong>Previous injuries or others:</strong> Sometimes old fractures or ligament injuries lead to <strong>post-traumatic arthritis</strong>. If your knee was damaged in the past and now you have chronic pain and instability, replacement might be recommended. Also, conditions like avascular necrosis or <strong>infections</strong> that destroy the joint can necessitate a new joint.<br /></li>
            </ul>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              In short, <strong>anyone with chronic knee pain and disability that is not improved by conservative treatments</strong> should consult a knee specialist. Our knee pain <strong>specialist</strong> (Dr. Naveen) will evaluate your condition through X-rays, physical exam, and history. We always exhaust simpler options (medications, bracing, injections) before suggesting surgery. If non-surgical measures aren't giving relief and your quality of life is suffering, it might be time to consider a total knee replacement to get you back to an active, pain-free life.
            </p>
          </section>

          {/* Why Choose Dr. Naveen Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Why Choose Dr. Naveen for Knee Replacement in Bangalore?
            </h2>
            <p className="mb-6 sm:mb-8 leading-relaxed" style={{ color: brandColors.lightText }}>
              Choosing the right surgeon is crucial for a successful knee replacement. Dr. <strong>Naveen Kumar L.V.</strong> stands out as one of the <strong>best knee replacement surgeons in Bangalore</strong>, and here's why:
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-la-hourglass-start-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Expertise & Qualifications</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Dr. Naveen is an internationally trained orthopedic surgeon with <strong>over 24 years of experience</strong> in knee and hip surgeries.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-la-running-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Sports Injury Specialist</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  With international qualifications (FRCS Orth, MCh, Dip. Sports Medicine) and training in sports medicine, he specializes in treating athletes and active individuals.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-fab-connectdevelop */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Advanced Techniques & Technology</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  We believe in offering the <strong>best and latest</strong> to our patients. Dr. Naveen specializes in <strong>minimally invasive and computer-navigated knee replacement</strong> techniques that can lead to smaller incisions and faster recovery.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-far-check-square-o */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>High Volume, High Success</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  Having performed <strong>thousands of knee surgeries</strong> – from routine total knee replacements to complex revision cases – Dr. Naveen has the experience that translates into excellent outcomes.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-la-hand-holding-heart-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Personalized Care</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  At <strong>Sports Orthopedics Institute</strong> (HSR Layout, Bangalore), Dr. Naveen leads a dedicated team that provides one-on-one attention. From your first consultation, he will take the time to explain your knee condition and all possible treatments in <strong>simple terms</strong>.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border" style={{ borderColor: brandColors.accent + '20' }}>
                {/* Icon Placeholder: tf-la-search-location-solid */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: brandColors.primary }}>Convenient Location</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: brandColors.lightText }}>
                  <strong>Sports Orthopedics</strong>, is located in HSR Layout, Bangalore, This location is easily accessible for patients from <strong>Koramangala, BTM Layout, Bellandur, Sarjapur Road, </strong>and other parts of Bangalore.
                </p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              In summary, <strong>Dr. Naveen Kumar L.V.</strong> is a renowned <strong>knee pain specialist</strong> and orthopedic surgeon who offers world-class knee replacement surgery in Bangalore with a personal touch. His blend of top-notch surgical skill, advanced technology, and genuine care for patients makes him an ideal choice if you are considering knee replacement. We strive to provide the <strong>best knee surgery experience</strong> – from the first consultation in our HSR Layout clinic (easily reachable from Koramangala, BTM Layout, Bellandur, Sarjapur Road, Electronic City, Marathahalli, Indiranagar, and other areas) all the way through your successful recovery.
            </p>
          </section>

          {/* Types of Knee Replacement Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Types of Knee Replacement Procedures
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              Not all knee problems are the same, so knee replacement surgery is <strong>not one-size-fits-all</strong>. Dr. Naveen will recommend the type of procedure that best suits your condition, knee anatomy, age, and lifestyle goals. Here are the main types of knee replacement procedures offered at our Bangalore clinic:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-4 sm:space-y-6" style={{ color: brandColors.lightText }}>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Total Knee Replacement (TKR)</h3>
                <p className="leading-relaxed" style={{ color: brandColors.lightText }}>
                  This is the most common procedure and what most people refer to as "knee replacement." In a TKR, the surgeon replaces <strong>both sides of the knee joint</strong> (the lower end of the thigh bone and the upper end of the shin bone, and often the back of the kneecap) with prosthetic components. Essentially, all the damaged cartilage and a small amount of underlying bone are removed, and metal components are fixed in place, with a special medical-grade plastic spacer in between. The result is a new joint surface that glides smoothly. Total knee replacement is ideal when <strong>arthritis is widespread</strong> throughout the knee. It reliably relieves pain and corrects deformity. Most patients who undergo TKR experience dramatic pain reduction and improved function – the new knee can bend and bear weight without the grinding pain you had before. (Fun fact: a replaced knee <strong>behaves like a normal knee</strong> in terms of movement once you recover from surgery​)<br />
                </p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Partial Knee Replacement (Unicondylar Knee Replacement)</h3>
                <p className="leading-relaxed" style={{ color: brandColors.lightText }}>
                  Not every arthritic knee needs a full replacement. In some patients, only one part of the knee joint is severely damaged (either the inner side, outer side, or the kneecap joint). In such cases, a <strong>partial knee replacement</strong> can be a great option. This surgery replaces only the <strong>affected compartment</strong> of the knee and leaves the healthy parts untouched. Because it's a smaller intervention, partial replacements often involve a smaller incision, less bone removal, and a quicker recovery. Patients often report the knee feels "more natural" since ligaments are preserved. However, a partial knee replacement is only suitable if the damage is truly limited to one area – Dr. Naveen will use advanced imaging and examination to determine this. If arthritis is likely to progress to other parts of the knee, a total replacement may be recommended instead. When appropriate, though, partial knee surgery can give excellent results with shorter hospital stays and rehabilitation time.<br />
                </p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Bilateral Knee Replacement</h3>
                <p className="leading-relaxed" style={{ color: brandColors.lightText }}>
                  If <strong>both knees</strong> are badly arthritic, you might eventually need replacement in both. This can be done either <strong>simultaneously (during one surgical session)</strong> or staged (separate surgeries a few months apart). Dr. Naveen has extensive experience with <strong>simultaneous bilateral knee replacements</strong> for patients who need it – for example, if both knees are equally painful and the patient is medically fit. Doing both at once means one anesthesia event and a single rehabilitation period for both knees, which some patients prefer to get everything done in one go. Others may opt to do one knee at a time (staged) to focus on one recovery at a time. Either approach can be safe and effective. Dr. Naveen will discuss the pros and cons with you, considering factors like your age, fitness, and support at home. Many of our bilateral knee patients are thrilled to get rid of pain in both knees and often say they wish they had done it sooner.<br />
                </p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Revision Knee Replacement</h3>
                <p className="leading-relaxed" style={{ color: brandColors.lightText }}>
                  A knee replacement is designed to last many years – typically <strong>15-20 years or more</strong> in 80-90% of patients​. However, if you are younger or very active, or if complications occur, a <strong><Link href="/revision-total-knee-replacement/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>revision surgery</Link></strong> might be needed down the line. Revision means <strong>replacing an old or failed implant</strong> with a new one. This is a more complex surgery because there may be bone loss or scar tissue to manage, and specialized implants are often required. Dr. Naveen is highly experienced in revision knee surgery, having trained in centers in the UK for complex joint revisions. Common reasons for revision include implant wear-and-tear (loosening), infection, or instability. If you had a knee replacement elsewhere that is now giving trouble, we can evaluate and, if needed, perform a safe revision to get you back on track.<br />
                </p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: brandColors.primary }}>Robotic-Assisted Knee Replacement</h3>
                <p className="leading-relaxed" style={{ color: brandColors.lightText }}>
                  Our center is proud to offer <strong>robotic knee replacement</strong> technology. Dr. Naveen is one of the few surgeons in Bangalore certified in the <strong>Mako robotic system</strong> for knee replacements. In a robotic-assisted procedure, a 3D model of your knee is created from a CT scan, and a robotic arm helps the surgeon execute the bone cuts with <strong>sub-millimeter precision</strong>. Don't worry – the surgery is still performed by Dr. Naveen; the robot is a tool that ensures perfect alignment and placement as per the plan. The potential benefits of robotic surgery include more accurate implant positioning (which may improve the knee's natural feel and longevity), less soft tissue damage, and possibly a faster recovery with less pain. If you're a candidate for robotic surgery, Dr. Naveen will discuss this option. Whether done with traditional instruments or the aid of a robot, the goal is the same: a well-balanced knee that moves freely and lasts a long time.<br />
                </p>
              </li>
            </ul>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Note:</strong> Dr. Naveen will customize the surgical plan for <em>you</em>. Every knee is unique. We take into account your <strong>age, activity level, knee anatomy, and overall health</strong> before recommending any procedure. Rest assured, you will get an honest opinion – if you do not need surgery, we'll tell you that too! And if you do, we'll choose the type of knee replacement that maximizes your benefits and minimizes risks.
            </p>
          </section>

          {/* What to Expect Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              What to Expect: Before, During, and After Surgery
            </h2>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              Facing surgery can be intimidating – but knowing what to expect can help ease your mind. We believe an informed patient is a more comfortable patient! Here's an overview of the journey when you undergo total knee replacement with Dr. Naveen:
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4 pb-1 sm:pb-2 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '30' }}>
              Before Surgery: Preparing for Your Knee Replacement
            </h3>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Thorough evaluation:</strong> Once you and Dr. Naveen decide to proceed with knee replacement, our team will conduct a detailed pre-surgery evaluation. This includes blood tests, cardiac check-up, and any other necessary investigations to ensure you're fit for anesthesia and surgery. We'll review your current medications. (For example, if you're on blood thinners or certain arthritis meds, you may need to stop them a week prior.) It's important to have conditions like diabetes or blood pressure well controlled before surgery.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Personalized planning:</strong> Dr. Naveen will take precise measurements of your knee via X-rays or scans to plan the surgery. If a <strong>robotic surgery</strong> is planned, a CT scan might be done to map your knee. We'll also discuss the type of anesthesia with you – typically either a <strong>spinal anesthesia</strong> (which numbs your legs but you are awake or lightly sedated) or <strong>general anesthesia</strong> (where you're fully asleep). Both are safe; the anesthesiologist will recommend the best option in your case.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Pre-hab and lifestyle tweaks:</strong> Often, we recommend some <strong><Link href="/total-knee-replacement-exercises/" className="font-medium hover:underline" style={{ color: brandColors.accent }}>physiotherapy exercises</Link></strong> in the weeks leading up to surgery ("pre-hab"). Strengthening your thigh and calf muscles beforehand can speed up recovery. If you smoke, this is a great time to stop – smoking can slow down wound healing. We'll also guide you on any weight loss or diet changes if needed, because a healthier body heals better. Arrange for support at home – for the first couple of weeks post-surgery, having a family member or friend to help with chores will make recovery smoother. And don't worry, we'll make sure you have a <strong>walker or crutches</strong> and other assistive devices ready for when you leave the hospital.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4 pb-1 sm:pb-2 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '30' }}>
              During Surgery: The Day of Your Knee Replacement
            </h3>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>On the day of surgery</strong>, you'll be admitted to the hospital (if not already the night before). Dr. Naveen will meet you before the procedure to answer any last-minute questions and mark the surgical site. Expect to be in the operating room for around <strong>1 to 2 hours</strong> for a knee replacement procedure. Here's a quick rundown of what happens during the surgery:
            </p>
            <ul className="list-disc pl-6 mb-6 sm:mb-8 space-y-2 sm:space-y-3" style={{ color: brandColors.lightText }}>
              <li><strong>Anesthesia &amp; prep:</strong> You'll receive the spinal or general anesthesia as discussed. Once you're comfortably anesthetized (you won't feel any pain during the operation), the surgical team cleans your knee and leg with antiseptic solution to maintain a sterile environment and reduces infection risk.<br /></li>
              <li><strong>Surgery steps:</strong> Dr. Naveen makes an incision (cut) in front of the knee to access the joint. The size of the incision can vary (usually around 6-10 inches, smaller in minimally invasive approaches). The damaged ends of the <strong>thigh bone (femur)</strong> and <strong>shin bone (tibia)</strong> are carefully removed or reshaped using special guides. Any remaining damaged cartilage is cleared. If the <strong>kneecap (patella)</strong> underside is worn out, that may be smoothed or a plastic button put in place. Then the artificial components – contoured metal pieces for femur and tibia, and a plastic spacer that sits between them – are implanted. These components may be <strong>cemented</strong> into place with bone cement or be of a type that allows your bone to grow onto them. Dr. Naveen pays close attention to aligning your leg correctly and balancing the ligaments so that the knee bends and straightens with proper tension (this is critical for a good result). If robotic assistance is used, the robot ensures the cuts match the plan perfectly.<br /></li>
              <li><strong>Closing up:</strong> Once the new knee components are in place and everything looks good, the incision is closed with sutures or staples. You'll have a <strong>dressing (bandage)</strong> applied over the incision. The whole process is meticulous but efficient in Dr. Naveen's experienced hands. Right after surgery, you'll be moved to a recovery area where nurses and doctors monitor you as you wake up from anesthesia.<br /></li>
            </ul>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Pain management:</strong> Even before you wake up, we take steps to manage pain. Often, Dr. Naveen or the anesthesiology team will put a <strong>nerve block</strong> (an injection to numb nerves in the leg) or inject local anesthetic around the knee during surgery. This greatly reduces post-op pain in the first day or two. You'll also be given IV pain medications as needed. Our goal is to keep you <strong>comfortable</strong> – some pain is normal after any surgery, but we keep it at a tolerable level so you can start moving and rehabbing quickly.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 sm:mt-8 sm:mb-4 pb-1 sm:pb-2 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '30' }}>
              After Surgery: Recovery and Rehabilitation
            </h3>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              Congratulations – you have a new knee! Now the focus shifts to recovery and helping you get the most out of your knee replacement. Here's what happens after the operation:
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>In the hospital:</strong> You will stay in the hospital for a short period after surgery. Many patients spend about <strong>2–4 days in the hospital</strong>​, though this can vary.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              On <strong>Day 1 (the same evening or next morning after surgery)</strong>, physiotherapists will start working with you. Initially, it's gentle movements: wiggling your toes, moving your ankles, and doing static exercises like pressing the back of your knee down into the bed (to engage your thigh muscles). These help improve circulation and prevent stiffness.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              By <strong>Day 2</strong>, most patients will <strong>sit up and dangle their legs at the bedside</strong> and even <strong>take a few steps with a walker</strong> under supervision​. Don't be surprised – yes, we get you up and <em>walking very soon after knee replacement</em>! Early movement is key to preventing blood clots and speeding recovery. You'll have a drip for fluids and maybe a drain in your knee (to remove any excess fluid from the joint area) for a day. Nurses will give you medications to manage pain and prevent clots (usually a blood thinner injection or pill).
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Rehabilitation and physiotherapy:</strong> Physical therapy is your best friend after knee replacement. Our expert physiotherapists will guide you through exercises to gradually increase your knee's range of motion and strengthen the muscles. Initially, it might be a bit challenging, but each day gets better. You'll practice bending the knee more each day (usually aiming for at least 90 degrees bend before leaving hospital) and strengthening exercises like gentle leg lifts. By the time you're discharged, you will be <strong>walking with a walker or crutches</strong> on your own for short distances (like around the room or hallway). We'll teach you how to safely climb stairs with assistance if needed (typically: "up with the good leg, down with the operated leg" using support).
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Going home:</strong> Most people go home after their hospital stay; some might go to a short-term rehab facility if extra help is needed (though with our robust home physiotherapy network, that's rarely necessary). At home, you will continue physiotherapy — either with a professional coming to your home or by visiting our center periodically, depending on what's convenient. You'll have some <strong>staples or stitches</strong> on your incision that will be removed about <strong>2 weeks after surgery</strong> (we'll schedule a follow-up for that). During the first 2-3 weeks, you'll likely use a walker, then progress to a cane, and eventually walk without support when you feel steady (often by around <strong>2-3 weeks</strong> you can walk short distances without the walker​, and by 4-6 weeks more confidently).
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Pain and medication:</strong> It's normal to have moderate pain for a few weeks, but it improves steadily. We will prescribe pain relief tablets that you can take as needed. Many patients find their pain is well controlled with medications by the end of week 1 or 2. The knee might be swollen for a few weeks – icing and elevating the leg help reduce swelling. Keep in mind, the <strong>"pain after knee replacement"</strong> is <strong>temporary</strong> and very manageable, and it's <strong>different from the arthritis pain</strong> you had (post-surgery pain lessens week by week, whereas arthritis pain would only worsen without surgery). We'll also guide you on wound care and signs of any issues to watch (though problems are uncommon, we stay proactive).
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Follow-ups:</strong> You'll have regular follow-up appointments with Dr. Naveen – usually at 2 weeks (for stitch removal and check-up), 6 weeks, 3 months, and so on. During these visits, we check your range of motion (most patients get back to 120-130 degrees bend eventually), and take X-rays to ensure the implants are in good position. Dr. Naveen will also discuss gradually resuming activities. By 6 weeks, many patients are walking without a cane and doing most daily activities like shopping or light housekeeping. By 3 months, you should be doing very well – walking longer distances, climbing stairs better, and maybe doing gentle exercises like stationary cycling or swimming. Over 6-12 months, any residual stiffness keeps improving. You can expect to <strong>return to an active lifestyle</strong> – not high-impact sports, but things like <strong>walking, golf, cycling, yoga</strong> are typically fine (and encouraged!). Your new knee won't prevent you from traveling or enjoying hobbies; it's there to <em>enable</em> those things with far less pain than before.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>A new lease on life:</strong> Most people find that by 3 to 6 months post-op, they hardly think about their knee anymore – it just works. They can walk without limping, climb stairs normally, and <em>most importantly</em>, they have <strong>relief from the constant pain</strong> that plagued them. You'll likely wonder why you didn't do it sooner! We've had patients tell us that knee replacement was "life-changing" – being able to play with grandkids, take morning walks in the park, or even go on trekking vacations that were impossible before. Our team will continue to be a resource for you even after you're fully recovered. We're just a phone call away if you have questions during rehab or even years later.
            </p>
            <p className="mb-4 sm:mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
              <strong>Your commitment:</strong> Successful recovery does require some effort from your side – mainly doing your physiotherapy exercises and staying active as advised. Think of it as a partnership: <strong>Dr. Naveen provides a brand new knee, and you put in the work to make it strong and functional.</strong> Don't worry, we'll support you throughout. And remember, every patient's recovery timeline is a little different – so don't be discouraged if your friend was off the walker in 2 weeks and you take 4 weeks. Steady progress is what matters, and we'll ensure you keep moving forward.
            </p>
          </section>

          {/* Testimonials Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b text-center" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Testimonials
            </h2>
            {/* Star Rating Placeholder - Visually represent 5 stars if possible, or use text */}
            <div className="text-center mb-6">
              <span style={{ color: brandColors.warning }}>★★★★★</span> {/* Simple text-based star representation */}
            </div>
            <div className="space-y-8">
              <div className="p-6 border rounded-lg shadow-lg" style={{ borderColor: brandColors.accent + '20', backgroundColor: brandColors.lightGray + '40' }}>
                <p className="italic leading-relaxed mb-4" style={{ color: brandColors.lightText }}>
                  "I suffered from knee arthritis for years and was hesitant about surgery. But after meeting Dr. Naveen, I felt confident to go ahead. He performed a total knee replacement on my right knee, and the results are amazing! Within a month, I was walking without support and climbing stairs with minimal discomfort. Now, three months later, I can go for my morning walks again – <em>pain-free</em>! Dr. Naveen is the best knee surgeon I could have asked for, and his team was caring and professional throughout. Thank you for giving me my active life back"
                </p>
                <p className="text-right font-semibold" style={{ color: brandColors.primary }}>
                  - S. Ramesh
                </p>
                <p className="text-right text-sm" style={{ color: brandColors.lightText }}>
                  Indiranagar, Bangalore
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-lg" style={{ borderColor: brandColors.accent + '20', backgroundColor: brandColors.lightGray + '40' }}>
                <p className="italic leading-relaxed mb-4" style={{ color: brandColors.lightText }}>
                  "After trying physiotherapy and injections for my knee pain, I finally decided to undergo knee replacement with Dr. Naveen. The surgery went smoothly and the care I received was top-notch. I was home in three days and the physiotherapist helped me regain strength week by week. It's been 8 weeks now, and I can honestly say I feel 10 years younger. I can walk longer distances and even enjoy gardening without crippling pain. My only regret is not doing it sooner! Dr. Naveen truly lives up to his reputation as one of the best joint replacement surgeons in Bangalore."
                </p>
                <p className="text-right font-semibold" style={{ color: brandColors.primary }}>
                  - Anita Gupta
                </p>
                <p className="text-right text-sm" style={{ color: brandColors.lightText }}>
                  Koramangala, Bangalore
                </p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
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

          {/* Call to Action Section */}
          <section className="text-center py-8 sm:py-10 mt-10 sm:mt-12 bg-gray-100 rounded-lg shadow-md" style={{ backgroundColor: brandColors.lightGray }}>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6" style={{ color: brandColors.primary }}>
              Ready to Regain Your Mobility?
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: brandColors.lightText }}>
              If knee pain is limiting your life, take the first step towards recovery. Contact Dr. Naveen Kumar and the Sports Orthopedics Institute team to discuss if total knee replacement is right for you.
            </p>
            <Link href="/book-appointment" legacyBehavior>
              <a className="inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition duration-300 text-base sm:text-lg" style={{ backgroundColor: brandColors.accent, color: brandColors.background }}>
                Book Your Consultation
              </a>
            </Link>
          </section>

          {/* Content will be added here */}
        </article>
      </main>
      <SiteFooter />
    </>
  );
};
export default TotalKneeReplacementPage; 