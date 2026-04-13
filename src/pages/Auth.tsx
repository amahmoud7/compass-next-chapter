import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast({
          title: "Check your email",
          description: "We sent you a confirmation link to verify your account.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "apple") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
    if (error) {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <img src={compassIcon} alt="Compass logo" className="w-7 h-7" />
            Compass<span className="text-secondary">CHW</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <a href="/#services" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="/#how-it-works" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="/#for-chws" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">For CHWs</a>
          </div>
        </div>
      </nav>

      {/* Auth Content */}
      <section className="min-h-[100dvh] flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-label text-muted-foreground uppercase">Start Your CHW Journey</span>
              </div>

              <h1 className="text-display-lg md:text-display-xl tracking-tight text-foreground">
                Your career in community health{" "}
                <span className="text-secondary">starts here.</span>
              </h1>

              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-lg">
                Join Compass and start earning by connecting with community members who need your help navigating housing, food, recovery, and healthcare.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {[
                  "Set your own schedule and work flexibly",
                  "Earn $32+/hour via Medi-Cal reimbursement",
                  "Make a real impact in your community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-body-md text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right auth card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="rounded-[20px] bg-card overflow-hidden shadow-elevated">
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-compass-nude" />

                <div className="p-7 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-display-sm text-foreground">
                      {isSignUp ? "Create your account" : "Welcome back"}
                    </h2>
                    <p className="text-body-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {isSignUp
                        ? "Sign up to start earning as a Community Health Worker."
                        : "Sign in to access your Compass dashboard."}
                    </p>
                  </div>

                  {/* Social buttons */}
                  <div className="flex flex-col gap-3 mb-6">
                    <button
                      onClick={() => handleSocialLogin("google")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 transition-colors text-body-sm font-medium text-foreground"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Continue with Google
                    </button>

                    <button
                      onClick={() => handleSocialLogin("apple")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 transition-colors text-body-sm font-medium text-foreground"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      Continue with Apple
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-label text-muted-foreground uppercase">or</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Email/password form */}
                  <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-label text-muted-foreground mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          required
                          type="email"
                          placeholder="maria@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl text-body-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-label text-muted-foreground mb-1.5">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          required
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          minLength={6}
                          className="w-full pl-10 pr-12 py-3 rounded-xl text-body-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-6 rounded-xl text-body-md font-bold text-primary-foreground mt-1"
                      variant="default"
                      size="lg"
                    >
                      {loading
                        ? "Please wait..."
                        : isSignUp
                        ? "Create Account"
                        : "Sign In"}
                    </Button>
                  </form>

                  {/* Toggle */}
                  <p className="text-center text-body-sm text-muted-foreground mt-6">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-primary font-semibold hover:underline"
                    >
                      {isSignUp ? "Sign in" : "Sign up"}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
