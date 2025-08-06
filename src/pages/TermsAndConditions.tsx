import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Clock, Ban, Eye, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-md border-b shadow-warm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <span className="text-xl font-bold text-foreground">Winpal Guest House</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">Guest House Rules & Policies</p>
            <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</div>
          </div>

          {/* Guest House Rules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Guest House Rules & Policies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Cancellation Policy */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Cancellation Policy</span>
                </h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span><strong>100% refund</strong> if cancelled 7 days before check-in</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span><strong>80% refund</strong> if cancelled 72 hours before check-in</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span><strong>50% refund</strong> if cancelled 6 hours before check-in</span>
                  </div>
                </div>
              </div>

              {/* Quiet Hours */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Quiet Hours</h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">Please respect quiet hours from 10:00 PM to 7:00 AM to ensure all guests can enjoy a peaceful stay.</p>
                </div>
              </div>

              {/* Smoking Policy */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                  <Ban className="w-4 h-4 text-destructive" />
                  <span>Smoking Policy</span>
                </h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" disabled className="rounded" />
                    <span className="text-destructive font-medium">Not allowed in rooms</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Smoking is strictly prohibited in all indoor areas. Designated smoking areas are available outdoors.</p>
                </div>
              </div>

              {/* Additional Rules */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">General Rules</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Check-in: 12:00 PM onwards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Check-out: 10:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Valid ID required at check-in</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Guests are responsible for any damages to property</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Lost key card replacement fee: KES 500</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-primary" />
                <span>Privacy Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Information Collection */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Information We Collect</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p className="text-muted-foreground">We collect the following information when you make a reservation:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Personal details (name, email, phone number)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Booking preferences and special requests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Payment information (processed securely)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">How We Use Your Information</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Process and confirm your booking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Communicate important booking updates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Provide customer service and support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Send promotional offers (with your consent)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Data Protection</span>
                </h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information. 
                    Your data is stored securely and never shared with third parties without your explicit consent, 
                    except as required by law.
                  </p>
                </div>
              </div>

              {/* Contact for Privacy */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Privacy Contact</span>
                </h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    For any privacy-related questions or to request deletion of your data, 
                    please contact us at: <span className="text-primary font-medium">winpalinvestments@gmail.com</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Questions About Our Policies?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these terms and conditions or our privacy policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">Return to Homepage</Link>
                </Button>
                <Button asChild>
                  <a href="tel:+254743494577">Call Us: +254743494577</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;