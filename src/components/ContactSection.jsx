import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  const onChangeHandler = (e) => {
    let change = {};
    change[e.target.id] = e.target.value;
    setFormData((prev) => {
      return { ...prev, ...change };
    });
  };

  const sendMessage = async () => {
    try {
      setButtonText("Sending...");
      await emailjs.send(
        "service_6pkgwlk",
        "template_wh8yqrj",
        formData,
        "EQEaVrvORCyb7bQrc"
      );

      setFormData({ name: "", email: "", message: "" });
      setEmailSent(true);

      setTimeout(() => {
        setEmailSent(false);
        setButtonText("Send Message");
      }, 2000);
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to send", variant: "destructive" });
      setButtonText("Send Message");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:aayushnair204@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aayushnair204@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+19342278523"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (934) 227-8523
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Stony Brook, NY, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                value={formData.name}
                id="name"
                required
                onChange={onChangeHandler}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Aayush Nair"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                id="email"
                required
                onChange={onChangeHandler}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                value={formData.message}
                id="message"
                required
                onChange={onChangeHandler}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            {!emailSent ? (
              <button
                disabled={!(formData.name && formData.email && formData.message)}
                onClick={sendMessage}
                className="w-full py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition"
              >
                {buttonText}
              </button>
            ) : (
              <span className="text-green-600 font-medium">
                Thanks for reaching out!
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
