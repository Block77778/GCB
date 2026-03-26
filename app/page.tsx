'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Twitter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#2d1b4e] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-[rgba(199,0,255,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/gcb-coin.png" 
              alt="Grubby Coin Block Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold font-heading text-white">Grubby Coin Block</h1>
          </div>
          <nav className="hidden md:flex gap-10">
            <a href="#story" className="text-sm font-medium hover:text-[#c700ff] transition-all duration-300 relative group">
              Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-[#c700ff] transition-all duration-300 relative group">
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#collection" className="text-sm font-medium hover:text-[#c700ff] transition-all duration-300 relative group">
              Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-[#c700ff] transition-all duration-300 relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="border-b border-[rgba(199,0,255,0.2)] relative overflow-hidden"
        style={{
          backgroundImage: 'url(/gcb-coin.png)',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '65% auto',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b4e] via-[#2d1b4e]/90 to-[#2d1b4e]/50"></div>
        <div className="absolute inset-0 gradient-magenta-fade opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-28 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold font-heading mb-8 leading-tight">Welcome to Grubby Coin Block!</h2>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed font-light">
              Welcome to my website where I'm promoting my Grubby Coin and NFTs to attract investors, traders, and to raise funds for my ventures.
            </p>
            <p className="text-lg mb-10 text-gray-300 leading-relaxed font-light">
              Dive in and discover the unique world of Grubby Coin and all the amazing opportunities it offers.
            </p>

            <div className="glass-effect-strong p-8 rounded-xl mb-10 border border-[rgba(199,0,255,0.3)]">
              <h3 className="text-xs font-semibold mb-3 text-gray-400 tracking-widest uppercase">Solana Contract Address</h3>
              <p className="font-mono text-sm break-all text-white leading-relaxed">DTB6kZTj3NbD2jQPSryznxZyUbCsCGjSHqxodEgKEaQu</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="premium-button shadow-lg">
                Buy GCB Now
              </Button>
              <Button className="premium-button-outline text-white">
                Stake Your Grubby
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]" id="story">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4">The Grubby Story</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
            <p>
              I created my Grubby Coin with positivity and creativity in mind. It's a unique digital asset in its own right, and a cool coin to have. The concept behind Grubby Coin Block is simple yet powerful: to create a community-driven token that supports multiple innovative ventures.
            </p>
            <p>
              By purchasing a Grubby Coin, you are directly supporting this venture and all the amazing projects outlined in our whitepaper. Whether it's NFTs, music, apparel, food services, or our various technological initiatives, every token holder becomes part of a larger ecosystem that creates meaningful opportunities and jobs for people throughout our community.
            </p>
            <p>
              All of the business ventures outlined in our whitepaper are being built from scratch as startups, with the mission to not only establish successful enterprises but to generate employment opportunities for dedicated team members and community members alike. We're committed to sustainable growth that benefits everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]" id="benefits">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-heading mb-6">Benefits of Owning Grubby Coin</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover the unique advantages and opportunities that come with holding Grubby Coin Block tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="glass-effect rounded-xl p-8 hover:glass-effect-strong transition-all duration-300 group hover:shadow-lg hover:shadow-[#c700ff]/20 hover:scale-105 transform"
              >
                <div className="w-16 h-16 bg-gradient-magenta rounded-full flex items-center justify-center mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whale Investor Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-6">Investment Opportunity for Whale Investors & Traders</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-10 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-gradient">About Our Ventures</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-4">
                  <span className="text-[#c700ff] mt-1 text-xl font-bold">✓</span>
                  <span className="font-light">All business ventures are being built from scratch as startups</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c700ff] mt-1 text-xl font-bold">✓</span>
                  <span className="font-light">Multiple revenue streams across diverse industries</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c700ff] mt-1 text-xl font-bold">✓</span>
                  <span className="font-light">Employment opportunities for community members</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c700ff] mt-1 text-xl font-bold">✓</span>
                  <span className="font-light">Long-term growth potential and market expansion</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-10 border border-[rgba(199,0,255,0.5)] hover:border-[#c700ff] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 gradient-magenta-fade opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-gradient">Serious Inquiries Only</h3>
                <p className="text-gray-300 mb-8 font-light leading-relaxed">
                  We are actively seeking whale investors and experienced traders interested in our visionary startup ecosystem. Token holders gain direct exposure to multiple business initiatives with significant growth potential.
                </p>
                <p className="text-gray-300 mb-8 text-sm font-light">
                  <strong className="text-white">Current Pricing:</strong> <span className="text-[#c700ff] font-bold">$0.50 per GCB coin</span> (no presale)
                </p>
                <Button className="w-full premium-button">
                  Inquire About Investment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Collection Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]" id="collection">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-heading mb-6">Explore Grubby's NFT Collection</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our exclusive NFT designs and digital assets available for purchase using GCB tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {nftCollection.map((nft, idx) => (
              <div 
                key={idx} 
                className="glass-effect rounded-xl p-6 hover:glass-effect-strong transition-all duration-300 group hover:shadow-lg hover:shadow-[#c700ff]/30 hover:scale-105 transform"
              >
                <h3 className="font-bold text-white mb-3 text-lg">{nft.name}</h3>
                <p className="text-sm text-[#c700ff] font-semibold">{nft.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="premium-button text-base px-10 py-6 shadow-lg">
              View NFTs Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]" id="faq">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-heading mb-6">Quick Questions</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass-effect rounded-xl overflow-hidden hover:glass-effect-strong transition-all duration-300 group"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-[rgba(199,0,255,0.08)] transition-all duration-300"
                >
                  <h3 className="font-bold text-white text-left text-lg group-hover:text-[#c700ff] transition-colors">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#c700ff] transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 py-6 bg-[rgba(199,0,255,0.05)] border-t border-[rgba(199,0,255,0.2)]">
                    <p className="text-gray-400 text-base leading-relaxed font-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="border-b border-[rgba(199,0,255,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-heading mb-6">Vision & Mission</h2>
            <div className="h-1 w-24 bg-gradient-magenta mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="glass-effect rounded-xl p-10 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h3 className="text-2xl font-bold text-gradient mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                At Grubby Coin Block (GCB), our vision is to create a vibrant and interconnected ecosystem that leverages blockchain technology to empower creativity and entrepreneurship. We aim to foster innovation in digital art and NFTs, revolutionize music distribution, and support the growth of our apparel and food service ventures. By integrating these diverse projects, we strive to provide unique value and opportunities for our community, making GCB a hub for creativity and collaboration.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-10 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h3 className="text-2xl font-bold text-gradient mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                The mission of Grubby Coin Block is to leverage blockchain technology to create value for various projects, offering a unique investment opportunity that supports the growth of NFTs, music, apparel printing, and food services. By integrating these ventures into a single token, we aim to provide a seamless and enriching experience for our community.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-heading mb-8">Business Ventures Portfolio</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">1. NFTs Promotion</h4>
              <p className="text-gray-300 text-sm font-light">Grubby Coin Block serves as the primary medium for promoting and trading exclusive NFT collections. These digital assets represent our creative vision and offer unique collectible items for our community.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">2. Music Album Distribution</h4>
              <p className="text-gray-300 text-sm font-light">Fans and supporters can purchase our upcoming music album using GCB, gaining access to exclusive content and experiences from artists in the ecosystem.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">3. Grubby's Tee Shirt & Printing Company</h4>
              <p className="text-gray-300 text-sm font-light">Funds raised support operations and expansion into a full apparel production company. Token holders receive discounts, special offers, and early access to new designs.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">4. Grubby's Pizza N Subs</h4>
              <p className="text-gray-300 text-sm font-light">GCB promotes and fundraises for our food service venture. Token holders benefit from exclusive deals and promotions on food offerings.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">5. Tile & Surface Refinishing</h4>
              <p className="text-gray-300 text-sm font-light">Funds support our floor restoration business offering high-quality refinishing services. Token holders get exclusive service offers and benefits.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">6. Floor Wax & Chemical Stripper Company</h4>
              <p className="text-gray-300 text-sm font-light">Funds develop manufacturing and distribution of professional floor wax, sealers, and chemical strippers for floor refinishing. Provides complete floor restoration solutions. Locations in development - USA and potential international expansion.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">7. Cotton Farm & Cotton Gin</h4>
              <p className="text-gray-300 text-sm font-light">Funds develop sustainable cotton farming operations and processing infrastructure with potential for future textile manufacturing. Locations under construction.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">8. Grubby's Coin Arcade Game</h4>
              <p className="text-gray-300 text-sm font-light">GCB is the core currency for interactive gaming experiences. Token holders access exclusive in-game features, competitions, and reward systems.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">9. Cell Phone & Laptop Company</h4>
              <p className="text-gray-300 text-sm font-light">Funds establish mobile phone sales and distribution, with expansion into technology development including custom electronics and microchips. Investment: $50,000. Locations under development.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">10. Lithium Operations & Clean Energy</h4>
              <p className="text-gray-300 text-sm font-light">Comprehensive lithium business combining battery manufacturing and mining/refining operations. Supports growing demand for lithium in electronics, EVs, and energy storage. Token holders participate in clean energy initiatives.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">11. Cannabis Facility</h4>
              <p className="text-gray-300 text-sm font-light">Funds support cultivation, distribution, and retail operations for cannabis products. Full-service facility combining growing, wholesale distribution, and retail consumer access. Locations under development with pricing details coming as we progress.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">12. Storage Facility & Apartment Complexes</h4>
              <p className="text-gray-300 text-sm font-light">Real estate development for self-storage facilities and residential apartment complexes. Diversified property portfolio generating recurring revenue. Locations under development with pricing details to follow.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">13. Metal & Aluminum Recycling Plant</h4>
              <p className="text-gray-300 text-sm font-light">Funds establish industrial recycling operations for aluminum and ferrous metals. Sustainable business model supporting environmental responsibility. Locations under development with pricing details coming soon.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">14. Trash & Waste Management Company</h4>
              <p className="text-gray-300 text-sm font-light">Comprehensive waste disposal and trash management services. All ventures will be established as LLC and S/C corporations at time of funding. Locations under development with pricing details to follow.</p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-[rgba(199,0,255,0.3)] hover:glass-effect-strong transition-all duration-300">
              <h4 className="text-xl font-bold text-[#c700ff] mb-4">15. Landscaping & Power Washing Services</h4>
              <p className="text-gray-300 text-sm font-light">Comprehensive landscaping and power washing services with focus on federal government contracts. Funds support equipment acquisition and operational expansion. Services include commercial and residential landscaping, power washing, and specialized federal contract work. Equipment and locations under development with pricing details coming as we progress.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold font-heading mb-8">Tokenomics Breakdown</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">35%</p>
              <p className="text-sm text-gray-300">Market Sale</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">22%</p>
              <p className="text-sm text-gray-300">Rewards Pool</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">14%</p>
              <p className="text-sm text-gray-300">Liquidity</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">11%</p>
              <p className="text-sm text-gray-300">Team & Advisors</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">9%</p>
              <p className="text-sm text-gray-300">Project Reserve</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">8%</p>
              <p className="text-sm text-gray-300">Development</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-[rgba(199,0,255,0.3)]">
              <p className="text-2xl font-bold text-[#c700ff] mb-2">1%</p>
              <p className="text-sm text-gray-300">Private Sale</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Button className="premium-button px-12 py-4">
              Download Full Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="border-b border-[rgba(199,0,255,0.2)] relative overflow-hidden">
        <div className="absolute inset-0 gradient-magenta-fade opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-32 relative z-10 text-center">
          <h2 className="text-6xl font-bold font-heading mb-8">Be a part of our growing community</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of investors and traders building the future with Grubby Coin Block
          </p>
          <Button className="premium-button text-base px-12 py-7 shadow-lg hover:shadow-xl">
            Join Community Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect border-t border-[rgba(199,0,255,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Quick Questions</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">What is GCB?<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">How to Buy?<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">Staking Guide<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Connect</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="mailto:grubbycoinblock@gmail.com" className="hover:text-[#c700ff] transition-all duration-300 relative group">Grubbycoinblock@gmail.com<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">@GrubbyCoinBlock<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">Whitepaper<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">Contract<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
                <li><a href="#" className="hover:text-[#c700ff] transition-all duration-300 relative group">Documentation<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c700ff] group-hover:w-full transition-all duration-300"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(199,0,255,0.2)] pt-12">
            <div className="text-center mb-12 flex justify-center">
              <div className="w-32 h-32">
                <img 
                  src="/gcb-coin.png" 
                  alt="Grubby Coin Block" 
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>
            <div className="text-center mb-8 p-6 glass-effect rounded-xl border border-[rgba(199,0,255,0.3)]">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-white">Disclaimer:</strong> GCB is a utility token designed for use within the ecosystem. While every effort has been made to ensure accuracy and reliability, users are encouraged to conduct their own research. Investing in digital assets carries inherent risks.
              </p>
            </div>
            <div className="text-center text-xs text-gray-500">
              <p className="mb-4">© Copyright Grubby Coin Block. All Rights Reserved.</p>
              <div className="flex justify-center gap-6">
                <a href="#" className="hover:text-[#c700ff] transition-colors">Terms & Conditions</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#c700ff] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const benefits = [
  {
    icon: '🎨',
    title: 'Purchase Exclusive NFTs',
    description: 'Use GCB to purchase unique, collectible NFT designs that represent our creative vision.'
  },
  {
    icon: '🌐',
    title: 'Part of Unique Ecosystem',
    description: 'Be a part of a vibrant and interconnected digital ecosystem supporting multiple ventures.'
  },
  {
    icon: '🎵',
    title: 'Access Music Album',
    description: 'Purchase and access exclusive content from "Sporadic Practice" and future releases.'
  },
  {
    icon: '🎁',
    title: 'Exclusive Deals',
    description: 'Receive special offers, discounts, and early access to products from partner businesses.'
  },
  {
    icon: '🚀',
    title: 'Support Entrepreneurship',
    description: 'Directly support innovative ventures including apparel, food services, and energy.'
  },
  {
    icon: '🎮',
    title: 'Play & Earn',
    description: 'Engage with Grubby\'s Coin Arcade Game for exclusive features and rewards.'
  }
];

const nftCollection = [
  { name: 'Golden Token', emoji: '🪙', price: '100 GCB' },
  { name: 'Digital Art', emoji: '🎨', price: '150 GCB' },
  { name: 'Music NFT', emoji: '🎵', price: '200 GCB' },
  { name: 'Virtual Land', emoji: '🏗️', price: '250 GCB' }
];

const faqs = [
  {
    question: 'What is Grubby Coin Block?',
    answer: 'Grubby Coin Block (GCB) is a revolutionary token on the Solana blockchain designed to integrate and promote a diverse array of ventures including NFTs, music, apparel, and various business initiatives.'
  },
  {
    question: 'How do I buy Grubby Coin Block?',
    answer: 'You can purchase GCB via debit card, credit card, or cryptocurrency. The current price is $0.50 per coin with no presale. Each coin represents a stake in our diverse portfolio of startup ventures.'
  },
  {
    question: 'What are the use cases for GCB?',
    answer: 'GCB serves multiple purposes: purchasing NFTs, accessing exclusive music content, obtaining discounts on merchandise and services, and participating in our arcade game ecosystem.'
  },
  {
    question: 'Is Grubby Coin Block a legitimate project?',
    answer: 'Yes, GCB is a legitimate token on the Solana blockchain with a clear whitepaper, use cases, and roadmap. You can verify our token on Solana using our contract address: DTB6kZTj3NbD2jQPSryznxZyUbCsCGjSHqxodEgKEaQu. We encourage all investors to do their own research.'
  },
  {
    question: 'What business ventures are included in the whitepaper?',
    answer: 'Our portfolio includes 15 major ventures: NFT creation and trading, music album production, apparel printing company, pizza and submarine sandwich shop, tile and surface refinishing, floor wax and chemical stripper manufacturing, cotton farming and cotton gin, arcade game development, cell phone and laptop company, lithium operations (battery manufacturing and mining/refining), cannabis facility (cultivation/distribution/retail), storage facilities and apartment complexes, metal and aluminum recycling plant, trash waste management company, and landscaping with power washing services (including federal government contracts). Each venture creates employment opportunities and is being built from the ground up.'
  },
  {
    question: 'What is the cost structure for your ventures?',
    answer: 'The Cell Phone & Laptop Company requires an estimated investment of $50,000. For most ventures including cannabis facility, storage facilities, apartment complexes, recycling plant, waste management, and floor wax manufacturing, pricing and location details are being finalized and will be shared as funding progresses. All LLC and S/C corporations will be established at the time of funding. Token holders benefit from equity-like exposure to these diverse revenue streams.'
  },
  {
    question: 'Are there job opportunities in these ventures?',
    answer: 'Yes! A key aspect of our mission is creating meaningful employment opportunities. All business ventures are designed to hire team members and community participants, ensuring that growth benefits more than just the founder. We are committed to sustainable, inclusive business development.'
  },
  {
    question: 'Is this suitable for whale investors?',
    answer: 'We are actively seeking whale investors and serious traders. With a $0.50 per coin price point and multiple high-potential startup ventures, GCB represents a substantial investment opportunity. Serious inquiries only - contact us directly at grubbycoinblock@gmail.com for investment discussions.'
  }
];
