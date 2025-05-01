
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const SampleForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "Your free sample will be on its way soon.",
      });
      setName("");
      setEmail("");
      setAddress("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="h3 text-harbor-700 mb-4">Get Your Free Sample</h3>
      <p className="text-gray-600 mb-6">
        Try our premium products at home. Fill out the form below and we'll send you a free sample.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Shipping Address</Label>
          <Input 
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter your address"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-harbor-600 hover:bg-harbor-700" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Request Free Sample"}
        </Button>
      </form>
    </div>
  );
};

export default SampleForm;
