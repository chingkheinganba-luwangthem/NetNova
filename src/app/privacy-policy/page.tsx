import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NetNova Technologies Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#FBF6E8] overflow-hidden border-b border-[#1E3A8A]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#1E3A8A]/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-semibold uppercase tracking-wider mb-4">
            Legal & Compliance
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#07162B] mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight">
            Privacy <span className="text-[#D9B24C]">Policy</span>
          </h1>
          <p className="text-xl font-bold text-[#1E3A8A] mb-4">
            Your Privacy, Our Commitment
          </p>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            At NetNova Technologies, protecting your personal information is one of our highest priorities. We are committed to maintaining the privacy, security, and confidentiality of the information entrusted to us by our candidates, clients, partners, and website visitors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12 text-[#475569] leading-relaxed">
            
            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Introduction</h2>
              <p className="mb-4">NetNova Technologies ("NetNova", "we", "our", or "us") provides recruitment, staffing, workforce solutions, and career advancement services to professionals and organizations worldwide.</p>
              <p>We understand the importance of protecting personal information and are committed to handling all data responsibly, securely, and in accordance with applicable privacy laws and regulations. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our services.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Scope</h2>
              <p className="mb-4">This Privacy Policy applies to personal information collected from:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C]">
                <li>Job seekers and candidates applying for employment opportunities</li>
                <li>Clients utilizing our recruitment and staffing services</li>
                <li>Employers seeking talent acquisition solutions</li>
                <li>Business partners and service providers</li>
                <li>Visitors to our website</li>
                <li>Individuals communicating with us through phone, email, or online forms</li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Information We Collect</h2>
              <p className="mb-4">We may collect the following categories of personal information:</p>
              
              <h3 className="text-lg font-bold text-[#1E3A8A] mt-6 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 marker:text-[#1E3A8A]/50">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
              </ul>

              <h3 className="text-lg font-bold text-[#1E3A8A] mt-6 mb-2">Professional Information</h3>
              <ul className="list-disc pl-6 space-y-1 marker:text-[#1E3A8A]/50">
                <li>Resume/CV</li>
                <li>Employment history</li>
                <li>Educational qualifications</li>
                <li>Professional certifications</li>
                <li>Skills and competencies</li>
                <li>References and recommendations</li>
              </ul>

              <h3 className="text-lg font-bold text-[#1E3A8A] mt-6 mb-2">Recruitment Information</h3>
              <ul className="list-disc pl-6 space-y-1 marker:text-[#1E3A8A]/50">
                <li>Job preferences</li>
                <li>Application records</li>
                <li>Interview details</li>
                <li>Employment eligibility information</li>
                <li>Career objectives</li>
              </ul>

              <h3 className="text-lg font-bold text-[#1E3A8A] mt-6 mb-2">Business Information</h3>
              <ul className="list-disc pl-6 space-y-1 marker:text-[#1E3A8A]/50">
                <li>Company details</li>
                <li>Hiring requirements</li>
                <li>Recruitment-related communications</li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">How We Collect Information</h2>
              <p className="mb-4">We collect information through various channels, including:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C]">
                <li>Online application forms</li>
                <li>Resume and CV submissions</li>
                <li>Contact forms on our website</li>
                <li>Email and telephone communications</li>
                <li>Professional networking platforms</li>
                <li>Interviews and consultations</li>
                <li>Client onboarding and recruitment engagements</li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">How We Use Your Information</h2>
              <p className="mb-4">We use personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C]">
                <li>Matching qualified candidates with relevant employment opportunities</li>
                <li>Providing recruitment, staffing, and workforce solutions</li>
                <li>Communicating with candidates regarding job opportunities and application status</li>
                <li>Assisting clients with talent acquisition needs</li>
                <li>Verifying professional qualifications and employment history</li>
                <li>Improving our services and user experience</li>
                <li>Responding to inquiries and support requests</li>
                <li>Maintaining recruitment and business records</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Information Sharing and Disclosure</h2>
              <p className="mb-4 font-semibold text-[#07162B]">NetNova Technologies does not sell, rent, or trade personal information to third parties.</p>
              <p className="mb-4">Information may only be disclosed:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C] mb-6">
                <li>To prospective employers or clients as part of recruitment services and only when necessary</li>
                <li>When required by applicable laws, regulations, or legal processes</li>
                <li>To protect our legal rights, property, or safety</li>
                <li>When authorized or consented to by the individual concerned</li>
              </ul>
              <p className="font-semibold text-[#07162B]">We do not share personal information with unrelated third-party entities for marketing purposes.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Data Security</h2>
              <p className="mb-4">We implement appropriate technical, administrative, and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.</p>
              <p className="mb-4">These measures include:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C] mb-6">
                <li>Secure systems and databases</li>
                <li>Access controls and authentication procedures</li>
                <li>Data encryption where appropriate</li>
                <li>Regular security monitoring and updates</li>
                <li>Backup and recovery procedures</li>
                <li>Restricted access based on business necessity</li>
              </ul>
              <p>While we strive to maintain the highest security standards, no method of transmission over the internet or electronic storage can be guaranteed as completely secure.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Data Retention</h2>
              <p className="mb-4">We retain personal information only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C] mb-6">
                <li>Provide our services</li>
                <li>Support recruitment and staffing activities</li>
                <li>Fulfill contractual obligations</li>
                <li>Meet legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p>When information is no longer required, it will be securely deleted, destroyed, or anonymized.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Your Privacy Rights</h2>
              <p className="mb-4">Depending on applicable laws and regulations, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C] mb-6">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where applicable</li>
                <li>Request information regarding how your data is used</li>
              </ul>
              <p>Requests related to privacy rights may be submitted using the contact information below.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Cookies and Website Usage</h2>
              <p className="mb-4">Our website may use cookies and similar technologies to improve user experience, analyze website performance, and enhance our services.</p>
              <p className="mb-4">These technologies may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#D9B24C] mb-6">
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Referral sources</li>
              </ul>
              <p>Users may control cookie preferences through their browser settings.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Third-Party Links</h2>
              <p>Our website may contain links to external websites operated by third parties. NetNova Technologies is not responsible for the privacy practices or content of those external websites. Users are encouraged to review the privacy policies of any third-party websites they visit.</p>
            </div>

            {/* Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Changes to This Privacy Policy</h2>
              <p className="mb-4">NetNova Technologies reserves the right to modify or update this Privacy Policy at any time.</p>
              <p>Any updates will become effective immediately upon publication on our website. Continued use of our services following any changes constitutes acceptance of the revised Privacy Policy.</p>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#07162B] mb-4 pb-2 border-b border-[#1E3A8A]/10 font-[family-name:var(--font-geist-sans)]">Contact Us</h2>
              <p className="mb-8">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border border-[#1E3A8A]/10 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E3A8A] mb-1">Address</p>
                    <p className="text-[#475569]">30 N Gould St Ste R<br />Sheridan, WY 82801</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border border-[#1E3A8A]/10 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E3A8A] mb-1">Phone</p>
                    <p className="text-[#475569]">+1 646 532 0205</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] border border-[#1E3A8A]/10 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E3A8A] mb-1">Email</p>
                    <a href="mailto:info@netnova-technologies.com" className="text-[#475569] hover:text-[#D9B24C] transition-colors">
                      info@netnova-technologies.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
