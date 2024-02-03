
import React from "react";
import { AboutIntro, ContactInfo, MissionVision, TeamMembers } from "../components/reuseable";


export default function AboutPage() {

    return (
        <div className="px-2">
          <AboutIntro />
          <TeamMembers />
          <MissionVision />
          <ContactInfo />
          {/* Add any additional sections as needed */}
        </div>
      );
} 