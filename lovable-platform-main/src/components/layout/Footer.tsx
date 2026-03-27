import { Link } from "react-router-dom";
import { siteSettings, footerMenu, headerMenu } from "@/data/mockCms";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-3">{siteSettings.siteName}</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {siteSettings.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              {siteSettings.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Navigation</h4>
            <ul className="space-y-2">
              {headerMenu.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Legal</h4>
            <ul className="space-y-2">
              {footerMenu.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {siteSettings.footer.address}
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="w-4 h-4 shrink-0" />
                {siteSettings.footer.phone}
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4 shrink-0" />
                {siteSettings.footer.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-6 text-sm opacity-50 text-center">
          {siteSettings.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
