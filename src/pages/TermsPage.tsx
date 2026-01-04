import { motion } from 'framer-motion'

import { Contact } from '@/components/Contact'

export function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 tracking-tighter">TERMS OF SERVICE</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none opacity-80 space-y-8 font-light">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website at Aegon Studios, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Aegon Studios' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Aegon Studios' website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p>
                The materials on Aegon Studios' website are provided on an 'as is' basis. Aegon Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p>
                In no event shall Aegon Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aegon Studios' website, even if Aegon Studios or a Aegon Studios authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Aegon Studios' website could include technical, typographical, or photographic errors. Aegon Studios does not warrant that any of the materials on its website are accurate, complete or current. Aegon Studios may make changes to the materials contained on its website at any time without notice. However Aegon Studios does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Lagos, Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:hello@aegon.com" className="underline hover:text-foreground">hello@aegon.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Contact showHeader={false} />
    </main>
  )
}
