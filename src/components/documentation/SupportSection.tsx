// components/documentation/SupportSection.tsx
import { FiGithub, FiMail, FiMessageCircle } from 'react-icons/fi';

export default function SupportSection() {
  return (
    <div id="support" className="text-center mt-16">
      <div className="bg-white rounded-2xl p-8 border-2 border-[#F5CB9B] max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Need Help?</h3>
        <p className="text-[#4A5568] mb-6">
          Our support team is here to help you get the most out of Emailly components.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#FCF6EA] rounded-xl p-4 border border-[#F5CB9B]">
            <FiGithub className="text-[#62BCBA] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-[#2D3748]">GitHub</div>
            <div className="text-[#4A5568] text-sm">Report issues and feature requests</div>
          </div>
          <div className="bg-[#FCF6EA] rounded-xl p-4 border border-[#F5CB9B]">
            <FiMessageCircle className="text-[#62BCBA] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-[#2D3748]">Discord</div>
            <div className="text-[#4A5568] text-sm">Join our community</div>
          </div>
          <div className="bg-[#FCF6EA] rounded-xl p-4 border border-[#F5CB9B]">
            <FiMail className="text-[#62BCBA] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-[#2D3748]">Email</div>
            <div className="text-[#4A5568] text-sm">Contact support directly</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/your-repo"
            className="bg-[#F78D50] text-white rounded-xl px-6 py-3 font-semibold hover:bg-[#E67C3F] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FiGithub className="text-lg" />
            View GitHub
          </a>
          <a 
            href="mailto:support@emailly.com"
            className="bg-white text-[#62BCBA] border-2 border-[#62BCBA] rounded-xl px-6 py-3 font-semibold hover:bg-[#62BCBA] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FiMail className="text-lg" />
            Contact Support
          </a>
        </div>

        <div className="mt-6 text-sm text-[#4A5568]">
          <p>Typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
}