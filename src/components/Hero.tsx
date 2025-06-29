import { Github, Mail, ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900/20 via-slate-800 to-slate-900/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          {/* Left side - Profile image */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start animate-fade-in">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-teal-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal-500/10 to-teal-600/10 blur-2xl animate-pulse delay-1000"></div>
              
              {/* Rotating border */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Inner glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-300/50 to-teal-400/50 blur-sm"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden bg-gradient-to-br from-slate-700/80 to-slate-800/80 p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-600/60 to-slate-700/60">
                  <img 
                    src="/lovable-uploads/de0a44a3-bce2-4186-85d3-b39ed1c1bbcb.png" 
                    alt="Praveen Kumar - Frontend Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-110 contrast-105"
                  />
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-teal-500 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping delay-1000"></div>
              
              {/* Status indicator */}
              <div className="absolute bottom-6 right-6 flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-teal-400/30">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-300 font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-2 lg:order-2 text-center lg:text-left animate-fade-in">
            {/* Greeting with icon */}
            <div className="mb-6 flex items-center justify-center lg:justify-start space-x-2">
              <Sparkles className="text-teal-400 animate-pulse" size={22} />
              <span className="text-teal-400 text-lg font-medium tracking-wide">Hi there, I'm</span>
              <Sparkles className="text-teal-400 animate-pulse" size={22} />
            </div>
            
            {/* Main heading with enhanced typography */}
            <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-100 to-teal-200 bg-clip-text text-transparent leading-tight">
              Praveen Kumar
            </h1>
            
            {/* Enhanced subtitle */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-transparent bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text font-bold mb-3">
                Aspiring Frontend Developer
              </h2>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base text-gray-300">
                <span className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full backdrop-blur-sm">
                  C++ Enthusiast
                </span>
                <span className="text-teal-400">•</span>
                <span className="px-3 py-1 bg-teal-600/20 border border-teal-600/30 rounded-full backdrop-blur-sm">
                  React Developer
                </span>
                <span className="text-teal-400">•</span>
                <span className="px-3 py-1 bg-teal-700/20 border border-teal-700/30 rounded-full backdrop-blur-sm">
                  UI/UX Designer
                </span>
              </div>
            </div>
            
            {/* Enhanced description */}
            <p className="text-base md:text-lg lg:text-base xl:text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Crafting <span className="text-teal-400 font-semibold">user-centric</span> and{' '}
              <span className="text-teal-300 font-semibold">interactive</span> web experiences 
              with modern technologies, creative problem-solving, and intuitive design principles.
            </p>
            
            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <a 
                href="https://github.com/P95211" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 backdrop-blur-sm"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>View GitHub</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
              
              <a 
                href="mailto:praveenkaswan1023@gmail.com"
                className="group relative border-2 border-teal-400/50 text-teal-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:border-teal-300 backdrop-blur-sm hover:bg-teal-500/10"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm font-medium group-hover:text-teal-400 transition-colors">
            Scroll to explore
          </span>
          <div className="p-3 rounded-full border-2 border-teal-400/30 group-hover:border-teal-400 transition-all duration-300 group-hover:bg-teal-500/10">
            <ArrowDown size={20} className="text-teal-400 group-hover:text-white transition-colors animate-bounce" />
          </div>
        </div>
      </button>
    </section>
  );
};
