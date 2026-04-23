/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dog, 
  Cat, 
  Sparkles, 
  Scissors, 
  PlayCircle, 
  ArrowRight, 
  Heart, 
  Share2, 
  User, 
  Play, 
  Video, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Send 
} from "lucide-react";

const CATEGORIES = [
  { name: "Dogs Grooming", icon: <Dog className="w-8 h-8 text-primary" /> },
  { name: "Cats Grooming", icon: <Cat className="w-8 h-8 text-primary" /> },
  { name: "Before & After", icon: <Sparkles className="w-8 h-8 text-primary" /> },
  { name: "Satisfying Clips", icon: <Scissors className="w-8 h-8 text-primary" /> },
];

const VIDEOS = [
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGNYUSoGQHHWf7hDnKYAgZqWeUtbgwBsB5PYvq4-nfV0_1FqdvuhefFE3KrxKhVQrkHMFZMx3_5QPU1Jd_iG0JIlFUmeupghKc2WFwM3E-ibh4dsATdmRFcOt6IBNnIupAwSp_Dy-_XboxxH2INXy1-sbFgsKsxVh6qPYuOcE5GrR85ymbWS5mqXj2oS_U_hTJIfKiyv_J2S4U-9bMZzM46PJanDn68bEL5H_ytheh0cPelmkOdC6fkzefhhVv64jVS6bspu_7B7c",
    title: "Amazing Dog Grooming Transformation",
    duration: "10:24",
    tag: "DOGS",
    description: "Watch this messy pup become a show-stopper with a premium spa treatment."
  },
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgLLmyNBCbMEnDewtbUVS3fz0bh4VuxO98QakzBBFKYooLYhdtA-nF8jvN2YF2HixJB_Z-gQiUGLyjME-O7qIC78bahAY8RWN6z7gL7wrht9AktYRMfsmEPKbHUtdhIq7iMNSWWY8z_-hwx6L9xDsZlbeOU2y4ZlvvefMOj8WI4gMrlv24rBJhdfFDgJNOF5PijfxAwwSR826TPBYrbmbmjGxgsZ6tCCg_Nj2JDgaK4fo_jgoFKaaGr3a4Yrl-4Sht_s5Vhd7jdk",
    title: "From Messy to Fluffy!",
    duration: "08:15",
    tag: "CATS",
    description: "This Persian cat receives the ultimate deshedding and styling session."
  },
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbx8wtfsgptYYw8fycAzjgxANnBwKjEUYNMqG-5HY-ZXqT4N1VrE2K1yJZ3plVDq6vsVoblOjgxynq3cvR8KqI84DizrIEkKkn1Nf6cTz8506Leqr0YELpYgCUptFayPOJvgv33QWTP4lsLeP-QFjOGyESEUz1m7vg261mFnxMvUbZ4u6wuUa5Ngz9xLcZtzzUlXB7i_wGZx9MwhAj_TFB8DkvkAwPGcpfb7akanhoMu_BhfTR-XhqaICOexZTdzvvK6QFrA_AKK4",
    title: "Oddly Satisfying Brush Taps",
    duration: "05:45",
    tag: "SATISFYING",
    description: "Relaxing ASMR-style grooming sounds and satisfying visuals for pet lovers."
  },
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuABI6JXVP57EqA0EmhCu1hQGhhBpNAaROH-19G0kMlttpz0S5sUaH_Pzz2dZtlzjtB1_PR2XxACvWec42sY_xZtTmywEZYVuj1wLT2RyzKIYNXnnAZxBHsWK3Pnmwrx2fFjP7ohYuon92vIl8Ya1X7hmMkITaqqMQV_ZF9PNktuWqh--Ov2IN8uCDlR7jZYGyYJfJoqdYrSVx1OzzMA7rDIOfK6QbrYsV3gVbyT6PCuEBYIfo30pRNeAvymH5A9JX4bTVXOwUfiBXM",
    title: "Extreme Poodle Makeover",
    duration: "12:00",
    tag: "BEFORE & AFTER",
    description: "You won't believe it's the same dog! Watch the incredible transformation."
  },
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4xqKuP1xnL9CsxvqjAs_cPwpMmpwDgIQrT4vLAoimPRg6QzR38UuYVDAD41Hj_0ir-UH1M6ZEf-1Hzyx6wAePnY-T3oc3XQXL2vGMZggs1pqC64MkW_3ZGOdoiAu_86sxwL_96UkM9Svlt1jfD0eKLrN3Fi9d_Dqa3-eKx55v4hsZAR3jYvtn5V6xL5OP-kG6dagFYLycE3pTnubLjVWL-TzgMPbOW0UVfoPDCj5bM6blvKAUi0yK34DXz1T69ubJ4swmpRwIuZU",
    title: "Tiny Puppy Bubble Bath",
    duration: "06:30",
    tag: "SPA DAY",
    description: "The most adorable bath time you'll see today. Pure joy and bubbles!"
  },
  {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzfLGnsGM7yfWzqZl1y4vgLbU0Imq1AqmEKrwASclHVn0wf067JggG-FjmKT9yDTwgdG5iyD6KqRhwX10zFIjbXIuzXzTfoRsZ18V41csiQEYxeUrz5dG-GS-kx6BBTN7lfQIz5TqiUhpbq53D3dTa7mFWHJU3D2Hm6_Zzod_kDouHyRh5g_l6dbcKG2gW4QsvyOIEfDaRujiSjWHSvIfgORQAdPIup69Q6Zy2DVZE756c6rdXZBSCuV8sgjyznH5pHnAqew7hmVo",
    title: "Professional Scissor Work",
    duration: "09:12",
    tag: "TIPS",
    description: "Expert techniques for face trimming. A masterclass in pet aesthetics."
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
          <div className="text-2xl font-extrabold text-primary-container tracking-tighter">Animal Camera</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight">
            <a className="text-primary-container font-bold border-b-2 border-primary-container pb-1" href="#">Home</a>
            <a className="text-zinc-600 hover:text-primary-container transition-colors" href="#">Videos</a>
            <a className="text-zinc-600 hover:text-primary-container transition-colors" href="#">About</a>
            <a className="text-zinc-600 hover:text-primary-container transition-colors" href="#">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-zinc-600 hover:text-primary-container transition-colors">
              <Share2 size={20} />
            </button>
            <button className="text-zinc-600 hover:text-primary-container transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 md:px-16 bg-gradient-to-b from-primary-fixed/30 to-background flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">
              DAILY CUTENESS OVERLOAD
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Adorable Pet Grooming <br/>
              <span className="text-primary">Transformations</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
              Watch daily satisfying makeovers for dogs, cats, and fluffy friends. Bringing joy and relaxation through clean coats and happy tails.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <PlayCircle size={24} />
                Watch Videos
              </button>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                Follow Us
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden ring-1 ring-zinc-50">
                    <img 
                      alt={`user-${i}`}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-secondary">
                Loved by <span className="text-primary font-bold">100K+</span> pet fans
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft relative z-10 border-4 border-white">
              <img 
                alt="hero pet" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiQp_tUmUjSK42OllTAwg_mbSD4YTPiQ1M6pWF4PD7G01hLz9LwsNsW4wSNqaz-JU74MTBiAiHMnGmjgU-E3pq6QKuyuSJINV38kD0eo5JiMJ2Np-XuU7CMWk3VJ9PzBFAuy94MfzWG19FbBNLokuQleCF-KxpNEKQ6dgGOdG3IDMLO8n3n1K_5tyYtUUDax3uNbIM1JoEo6R0k9waAsv_FP6S9ZwhNP4brw5Sp1GhLHFSkEUMiSbQPrTetQ1jWYgnq_D7qHYBdQg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                <p className="font-semibold italic text-lg leading-snug text-shadow-sm">
                  "The most relaxing thing I've watched all day! So fluffy!"
                </p>
                <p className="text-sm mt-2 opacity-80">— @PetLover99</p>
              </div>
            </div>
            {/* Background decorative blobs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="py-16 px-6 md:px-16 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary-container hover:text-white transition-all duration-300 cursor-pointer shadow-soft"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-bold text-sm tracking-tight">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24 px-6 md:px-16 bg-surface-container-lowest flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Latest Transformations</h2>
              <p className="text-secondary leading-relaxed">
                Our most popular grooming sessions from the last 24 hours. Pure satisfaction in every clip.
              </p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:underline group">
              View all videos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {VIDEOS.map((video, i) => (
              <motion.div 
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-zinc-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    alt={video.title || "video thumbnail"} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={video.thumbnail}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-glow">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                    {video.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-secondary line-clamp-2 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 bg-tertiary-fixed/40 flex justify-center">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto">
            <Heart size={36} className="text-primary" fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Bringing Joy and Relaxation</h2>
          <p className="text-lg text-secondary leading-relaxed">
            At Animal Camera, we believe that pet grooming is a celebratory act of care and bonding. Our platform is dedicated to showcasing the artistic and nurturing side of animal care. Whether it's a dramatic poodle makeover or a simple, satisfying kitten brushing, we curate content that inspires pet owners and provides a soothing escape for animal lovers worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            {[
              { val: "10M+", label: "Views Daily" },
              { val: "500+", label: "Videos" },
              { val: "100K+", label: "Fans" },
              { val: "24/7", label: "Cuteness" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary">{stat.val}</p>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 flex justify-center">
        <div className="max-w-7xl w-full bg-primary-container text-on-primary-container rounded-3xl p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-glow">
          <div className="max-w-xl relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Follow Animal Camera for Daily Cute Transformations
            </h2>
            <p className="text-lg opacity-90 mb-8 font-medium">
              Join our community of pet lovers and never miss a single fluffy moment. New videos uploaded every morning!
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-50 transition-colors shadow-sm">
                <Youtube size={20} /> Youtube
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/30 transition-colors">
                <Instagram size={20} /> Instagram
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/30 transition-colors">
                <Facebook size={20} /> Facebook
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-soft rotate-3 group relative z-10 border-8 border-white/20">
            <img 
              alt="cta fluffy pet" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtO36vrB6IuV83ja0qMraS5Z6i7kQd6v8LBq7RaA0btPwGZXfROBhdcQv927hJhVKk1GAGVXVIl7oJrA0OyKGkIzotuiSSP2fNZTYPCjm3IsD-d8aeaPqtFh53Uhx9CkC3GYvcbOJb5NOyT-jSKu4328d0inPEp_1plPpf5lzBQ4_jTfcqdAS4nGjIW4GH0pfS-Xtf-H2fn14WfzvKbDIQGYaxiH46hBwyLph8TWCjRayLJ-qkIFThfUAJ30yEkm-hT8PsbJtYcPE"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 py-16 px-6 md:px-16 rounded-t-[3rem] border-t border-zinc-200 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div className="md:col-span-2">
              <div className="text-xl font-bold text-zinc-900 mb-4">Animal Camera</div>
              <p className="text-zinc-500 max-w-sm mb-6 leading-relaxed">
                Celebrating the bond between humans and their pets through the lens of care and grooming. Your daily dose of satisfying pet transformations.
              </p>
              <div className="flex gap-4">
                <Share2 size={18} className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
                <Mail size={18} className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 md:col-span-1">
              <div>
                <h4 className="font-bold text-zinc-900 mb-4 uppercase tracking-widest text-[10px]">Platform</h4>
                <ul className="space-y-3 text-zinc-500 font-medium">
                  {["Privacy Policy", "Terms of Service", "Accessibility", "Support"].map(l => (
                    <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-4 uppercase tracking-widest text-[10px]">Categories</h4>
                <ul className="space-y-3 text-zinc-500 font-medium">
                  {["Dogs", "Cats", "Satisfying", "Tutorials"].map(l => (
                    <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft border border-zinc-100 h-fit">
              <h4 className="font-bold text-zinc-900 mb-2">Stay Fluffy!</h4>
              <p className="text-zinc-500 mb-4 text-xs font-medium">
                Get weekly highlights and top trending transformations delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input 
                  className="bg-zinc-50 border-none rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-primary-container text-xs"
                  placeholder="Email address"
                  type="email"
                />
                <button className="bg-primary-container text-on-primary-container p-2 rounded-full hover:scale-105 transition-all shadow-glow">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-zinc-200 text-center">
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2024 Animal Camera. Celebrating care and bonding.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
