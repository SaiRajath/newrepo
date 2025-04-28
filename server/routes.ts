import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contacting
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate the required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide name, email and message" 
      });
    }
    
    // In a real app, you would send an email or store this message
    // For now, we just return success
    
    return res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    });
  });

  // Set up resume download route
  app.get("/api/resume", (req, res) => {
    const resumePath = path.resolve(__dirname, "../attached_assets/SaiRajath_CV_ForntEndDeveloper.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "SaiRajath_CV_ForntEndDeveloper.pdf");
    } else {
      res.status(404).json({ 
        success: false, 
        message: "Resume file not found" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
