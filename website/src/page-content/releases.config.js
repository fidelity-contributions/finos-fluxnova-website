import EngineIcon from "/img/icons/engine.svg";
import ModelerIcon from "/img/icons/modeler.svg";
import MonitoringIcon from "/img/icons/monitoring.svg";
import React from "react";

export const releasesConfig = {
  releaseLinks: [
    {
      title: "Fluxnova Engine",
      description:
        "Core BPMN/DMN process engine releases, changelogs, and binaries.",
      href: "https://github.com/finos/fluxnova-bpm-platform/releases",
      icon: EngineIcon,
    },
    {
      title: "Fluxnova Modeler",
      description:
        "Desktop modeling tool releases for designing BPMN and DMN diagrams.",
      href: "https://github.com/finos/fluxnova-modeler/releases",
      icon: ModelerIcon,
    },
    {
      title: "Fluxnova Control Center",
      description:
        "Operations and monitoring control center releases and updates.",
      href: "https://github.com/finos/fluxnova-control-center/releases",
      icon: MonitoringIcon,
    },
  ],
  about: {
    className: "display-block",
    elements: [
      <h2 className="section-heading" key="title">
        About Fluxnova Releases
      </h2>,
      <p key="body">
        Fluxnova Releases provide a complete overview of improvements, updates,
        and changes across the Fluxnova platform. Each release documents new
        features, enhancements, bug fixes, performance optimizations, and
        important notices that help understand how the platform is evolving.
        Release notes are published and are designed to give clear visibility
        into what’s new, what’s changed, and what actions if any are required.
        Whether you are adopting new capabilities, planning upgrades, or
        tracking platform stability, these releases serve as the primary source
        of truth for Fluxnova updates. For long term reference, all releases are
        accessible by version and date. Links to detailed documentation,
        migration guidance, and known issues are included where relevant to
        ensure a smooth and predictable experience for users and contributors.
      </p>,
    ],
  },
};
