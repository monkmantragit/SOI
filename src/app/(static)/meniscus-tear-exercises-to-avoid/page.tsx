import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  alternates: { canonical: 'https://sportsorthopedics.in/meniscus-tear-exercises-to-avoid' },
  title: 'Meniscus Tear Exercises to Avoid for Fast Recovery',
  description: 'Learn which meniscus tear exercises to avoid to prevent further injury. Find safer alternatives and expert tips for faster, pain-free knee recovery',
};

interface FaqItem {
  id?: string; // Optional id
  question: string;
  answer: string;
}

const MeniscusTearExercisesToAvoidPage = () => {
  const brandColors = {
    primary: '#2E3A59', 
    accent: '#8B5C9E',  
    text: '#333333',    
    lightText: '#555555', 
    background: '#FFFFFF',
    lightGray: '#F7FAFC', 
  };

  const faqs: FaqItem[] = [
    {
      question: "What exercises should I avoid with a torn meniscus?",
      answer: "Avoid high-impact exercises like running and jumping, deep squats, lunges, and activities involving twisting or pivoting the knee, such as basketball or soccer. These can worsen the tear and delay healing."
    },
    {
      question: "Can I still do cardio with a meniscus tear?",
      answer: "Yes, but stick to low-impact cardio. Swimming, cycling on a stationary bike (with proper seat height), and using an elliptical trainer are generally safe options that minimize stress on the knee."
    },
    {
      question: "How long should I avoid certain exercises after a meniscus tear?",
      answer: "The duration depends on the severity of the tear, whether you had surgery, and your individual healing progress. Always follow your doctor's or physical therapist's guidance. It can range from a few weeks to several months."
    },
    {
      question: "Are there any leg exercises I can do with a meniscus tear?",
      answer: "Yes, gentle strengthening exercises like straight leg raises, hamstring curls (gentle), quad sets, and calf raises are often recommended. Focus on controlled movements and avoid pain."
    },
    {
      question: "Is walking bad for a torn meniscus?",
      answer: "Walking is generally okay and often encouraged for mild to moderate tears, as it promotes blood flow. However, listen to your body. If walking causes pain, reduce the duration or intensity, or consult your doctor. Avoid uneven surfaces."
    },
    {
      question: "What is the fastest way to heal a torn meniscus without surgery?",
      answer: "While not all tears heal without surgery, the fastest non-surgical approach involves RICE (Rest, Ice, Compression, Elevation), physical therapy focusing on gentle range of motion and strengthening, avoiding aggravating activities, and potentially adjunctive therapies like PRP injections or laser therapy as advised by your doctor."
    }
  ];

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 sm:py-12" style={{ color: brandColors.text, backgroundColor: brandColors.background }}>
        
        {/* Hero Image */}
        <div className="mb-8 sm:mb-12 md:mb-16 relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="https://sportsorthopedics.in/wp-content/uploads/2025/04/New-Project-3.jpg" 
            alt="Meniscus Tear Exercises to Avoid" 
            fill
            style={{ objectFit: 'cover' }}
            priority 
          />
        </div>

        <article className="prose lg:prose-xl max-w-none mx-auto"> {/* Using prose classes as discussed */}
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center" style={{ color: brandColors.primary }}>
            Meniscus Tear Exercises to Avoid for Fast Recovery
          </h1>

          {/* Content from HTML will be added here section by section */}
          <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: brandColors.lightText }}>
            A meniscus tear can be a painful and frustrating injury, significantly impacting your mobility and daily life. Whether you&apos;re an athlete or simply enjoy an active lifestyle, understanding which <strong>meniscus tear exercises to avoid</strong> is crucial for a safe and speedy recovery. Doing the wrong movements can not only delay healing but also worsen the tear, potentially leading to chronic knee problems.
          </p>
          <p style={{ color: brandColors.lightText }}>
            This guide will walk you through the exercises that pose a risk to your injured meniscus, explain why they are harmful, and offer safer alternatives. Our goal is to help you navigate your recovery with confidence, ensuring you get back on your feet without causing further damage.
          </p>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Understanding Your Meniscus and Its Injury
            </h2>
            <p style={{ color: brandColors.lightText }}>
              Before diving into specific exercises, let&apos;s quickly understand what the meniscus is and how it gets injured. Each knee has two C-shaped pieces of cartilage called menisci (plural of meniscus). They act as shock absorbers between your thighbone (femur) and shinbone (tibia), providing cushioning and stability to the knee joint.
            </p>
            <p style={{ color: brandColors.lightText }}>
              Meniscus tears often occur during activities that involve forceful twisting or sudden stops and turns – common in sports like football, basketball, and soccer. They can also result from heavy lifting, deep squatting, or even degenerative changes in older individuals. Symptoms typically include knee pain (especially when twisting or rotating), swelling, stiffness, a catching or locking sensation, and difficulty straightening the knee fully.
            </p>
          </section>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Why Certain Exercises Are Harmful to a Torn Meniscus
            </h2>
            <p style={{ color: brandColors.lightText }}>
              When your meniscus is torn, it&apos;s vulnerable. Certain movements can place excessive stress on the damaged cartilage, preventing it from healing or even extending the tear. The primary culprits are:
            </p>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>High-Impact Forces:</strong> Activities that involve jumping, running, or jarring movements send significant force through the knee joint, which a torn meniscus cannot adequately absorb.</li>
              <li style={{ color: brandColors.lightText }}><strong>Deep Knee Bending:</strong> Exercises like deep squats or lunges compress the meniscus, especially the posterior (back) part, which is often involved in tears.</li>
              <li style={{ color: brandColors.lightText }}><strong>Twisting or Pivoting Motions:</strong> These movements can catch the torn edge of the meniscus between the femur and tibia, causing pain and potentially worsening the tear.</li>
              <li style={{ color: brandColors.lightText }}><strong>Repetitive Stress:</strong> Even seemingly gentle exercises, if done repetitively with poor form or too soon, can irritate the injured meniscus.</li>
            </ul>
            <p style={{ color: brandColors.lightText }}>
              The goal of avoiding these exercises is to create an environment where the meniscus can heal, inflammation can subside, and you can gradually regain strength and stability without re-injury.
            </p>
          </section>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Specific Meniscus Tear Exercises to AVOID
            </h2>
            <p style={{ color: brandColors.lightText }}>
              Here's a list of common exercises and activities that you should steer clear of during your meniscus tear recovery, unless explicitly cleared by your doctor or physical therapist:
            </p>
            
            <h3>High-Impact Activities:</h3>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Running and Jogging:</strong> The repetitive pounding is detrimental.</li>
              <li style={{ color: brandColors.lightText }}><strong>Jumping Exercises:</strong> Box jumps, jump rope, burpees involving jumps.</li>
              <li style={{ color: brandColors.lightText }}><strong>Sports Involving Sudden Stops and Pivots:</strong> Basketball, soccer, tennis, skiing, football, volleyball.</li>
            </ul>

            <h3>Deep Knee Bend Exercises:</h3>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Deep Squats:</strong> Squatting below parallel where thighs are lower than knees.</li>
              <li style={{ color: brandColors.lightText }}><strong>Deep Lunges:</strong> Especially if the front knee goes far past the ankle or involves twisting.</li>
              <li style={{ color: brandColors.lightText }}><strong>Leg Press (with deep range of motion):</strong> Puts significant compressive force on the knee.</li>
              <li style={{ color: brandColors.lightText }}><strong>Full-depth Plié Squats (in ballet/dance).</strong></li>
            </ul>

            <h3>Twisting and Pivoting Exercises:</h3>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Russian Twists (if involving knee movement or instability).</strong></li>
              <li style={{ color: brandColors.lightText }}><strong>Rotational exercises on machines that load the knee.</strong></li>
              <li style={{ color: brandColors.lightText }}><strong>Any exercise where your foot is planted and your body rotates over the knee.</strong></li>
            </ul>
            
            <h3>Other Potentially Harmful Exercises:</h3>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Stair Climbing Machines (with high resistance or speed):</strong> Can be okay in moderation later, but initially problematic.</li>
              <li style={{ color: brandColors.lightText }}><strong>High-Resistance Cycling (especially with improper seat height):</strong> Can strain the knee.</li>
              <li style={{ color: brandColors.lightText }}><strong>Certain Yoga or Pilates Poses:</strong> Poses involving deep knee flexion (e.g., Lotus Pose, Hero Pose) or twisting under load.</li>
            </ul>
            <p style={{ color: brandColors.lightText }}>
              <em>Always consult your healthcare provider or physical therapist for personalized advice, as the "avoid" list can vary based on the type and severity of your meniscus tear.</em>
            </p>
          </section>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              Safer Exercise Alternatives and Modifications
            </h2>
            <p style={{ color: brandColors.lightText }}>
              Recovering from a meniscus tear doesn't mean you have to be completely sedentary. In fact, gentle, controlled movement is often beneficial for healing. Here are some safer alternatives:
            </p>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Low-Impact Cardio:</strong>
                <ul>
                  <li style={{ color: brandColors.lightText }}>Swimming or water aerobics (avoid forceful kicking like breaststroke initially).</li>
                  <li style={{ color: brandColors.lightText }}>Stationary cycling with proper seat height (ensure no pain).</li>
                  <li style={{ color: brandColors.lightText }}>Elliptical trainer (if it doesn't cause pain).</li>
                  <li style={{ color: brandColors.lightText }}>Walking on flat, even surfaces.</li>
                </ul>
              </li>
              <li style={{ color: brandColors.lightText }}><strong>Controlled Strengthening Exercises (often part of physiotherapy):</strong>
                <ul>
                  <li style={{ color: brandColors.lightText }}>Straight leg raises.</li>
                  <li style={{ color: brandColors.lightText }}>Quad sets (tightening thigh muscle without moving the leg).</li>
                  <li style={{ color: brandColors.lightText }}>Hamstring sets and gentle hamstring curls.</li>
                  <li style={{ color: brandColors.lightText }}>Calf raises.</li>
                  <li style={{ color: brandColors.lightText }}>Short-arc quads/knee extensions (limited range of motion).</li>
                  <li style={{ color: brandColors.lightText }}>Glute bridges.</li>
                </ul>
              </li>
              <li style={{ color: brandColors.lightText }}><strong>Modified Squats and Lunges (if approved and pain-free):</strong>
                <ul>
                  <li style={{ color: brandColors.lightText }}>Mini squats (bending knees only slightly, keeping them behind toes).</li>
                  <li style={{ color: brandColors.lightText }}>Static lunges with very shallow depth.</li>
                </ul>
              </li>
              <li style={{ color: brandColors.lightText }}><strong>Flexibility and Range of Motion:</strong>
                <ul>
                  <li style={{ color: brandColors.lightText }}>Gentle heel slides.</li>
                  <li style={{ color: brandColors.lightText }}>Passive knee flexion and extension (within pain-free limits).</li>
                </ul>
              </li>
            </ul>
            <p style={{ color: brandColors.lightText }}>
              The key is to perform these exercises with controlled movements, avoid pain, and gradually increase intensity as guided by your physical therapist.
            </p>
          </section>
          
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              General Guidelines for Exercising with a Meniscus Tear
            </h2>
            <ul>
              <li style={{ color: brandColors.lightText }}><strong>Listen to Your Body:</strong> Pain is a signal. If an exercise hurts, stop or modify it. Don't push through sharp or increasing pain.</li>
              <li style={{ color: brandColors.lightText }}><strong>Warm-Up Properly:</strong> Gentle movements to increase blood flow before starting exercises.</li>
              <li style={{ color: brandColors.lightText }}><strong>Cool Down and Stretch:</strong> Gentle stretches after exercise.</li>
              <li style={{ color: brandColors.lightText }}><strong>Focus on Form:</strong> Correct technique is crucial to avoid stressing the knee.</li>
              <li style={{ color: brandColors.lightText }}><strong>Gradual Progression:</strong> Don't do too much too soon. Increase duration, intensity, and complexity slowly under guidance.</li>
              <li style={{ color: brandColors.lightText }}><strong>Wear Supportive Footwear:</strong> Good shoes can help with alignment and shock absorption.</li>
              <li style={{ color: brandColors.lightText }}><strong>Consider Bracing:</strong> Your doctor might recommend a brace for support during certain activities.</li>
              <li style={{ color: brandColors.lightText }}><strong>Stay Consistent with Physiotherapy:</strong> Your PT will provide a tailored exercise program crucial for recovery.</li>
            </ul>
          </section>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
              When to Consult Your Doctor or Physical Therapist
            </h2>
            <p style={{ color: brandColors.lightText }}>
              It's essential to work closely with healthcare professionals. Consult them if:
            </p>
            <ul>
              <li style={{ color: brandColors.lightText }}>You experience increased pain, swelling, or instability.</li>
              <li style={{ color: brandColors.lightText }}>Your symptoms aren't improving with rest and modification.</li>
              <li style={{ color: brandColors.lightText }}>You notice new symptoms like locking, catching, or the knee giving way.</li>
              <li style={{ color: brandColors.lightText }}>You're unsure about which exercises are safe for you.</li>
            </ul>
            <p style={{ color: brandColors.lightText }}>
              Recovering from a meniscus tear takes time and patience. By understanding which meniscus tear exercises to avoid and embracing safer alternatives, you can significantly improve your chances of a successful, pain-free recovery and get back to enjoying your favorite activities.
            </p>
          </section>

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 sm:mt-10 sm:mb-6 pb-2 sm:pb-3 border-b text-center" style={{ color: brandColors.primary, borderColor: brandColors.accent + '40' }}>
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`faq-${index + 1}`} key={index} className="border rounded-md" style={{ borderColor: brandColors.accent + '30' }}>
                      <AccordionTrigger className="p-4 sm:p-5 text-left font-medium hover:no-underline" style={{ color: brandColors.primary }}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 sm:p-5 pt-0">
                        <p className="text-base leading-relaxed" style={{ color: brandColors.lightText }}>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default MeniscusTearExercisesToAvoidPage; 