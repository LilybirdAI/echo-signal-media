export default function Home() {
  const cardStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(212,160,23,0.18)",
    borderRadius: 20,
    padding: 28,
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  };

  const sectionTitle = {
    fontSize: "clamp(30px, 5vw, 40px)",
    margin: "0 0 20px",
    color: "#f4d27a",
    letterSpacing: "-0.02em",
  };

  const chipStyle = {
    background: "rgba(212,160,23,0.12)",
    border: "1px solid rgba(212,160,23,0.28)",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 13,
    color: "#f4d27a",
  };

  const portfolioItems = [
    {
      title: "Echo Signal Media Website",
      text: "Clean, modern brand site built to present services clearly and convert visitors into project inquiries.",
      image: "/portfolio/website-showcase.png",
    },
    {
      title: "App Store Submission Support",
      text: "Resolved submission blockers, polished flows, and helped apps move back into review cleanly.",
      image: "/portfolio/app-store-support.png",
    },
    {
      title: "Mobile MVP Builds",
      text: "Built and polished SwiftUI apps for real clients with a focus on speed, stability, and launch readiness.",
      image: "/portfolio/mobile-mvp-builds.png",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "radial-gradient(circle at top, rgba(212,160,23,0.08), transparent 22%), #0f172a",
        color: "#ffffff",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <section
        style={{
          width: "100%",
          padding: "110px 24px 90px",
          borderBottom: "1px solid rgba(212,160,23,0.16)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 14,
              color: "#f4d27a",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 700,
            }}
          >
            Echo Signal Media
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 8vw, 68px)",
              lineHeight: 1.02,
              margin: "0 0 20px",
              fontWeight: 800,
              maxWidth: 900,
              letterSpacing: "-0.04em",
            }}
          >
            Apps built. Bugs fixed. App Store submissions handled.
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 3vw, 22px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760,
              margin: "0 0 28px",
            }}
          >
            I help founders launch, fix, and ship iOS and web apps without getting stuck in technical chaos.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
            <span style={chipStyle}>SwiftUI + iOS</span>
            <span style={chipStyle}>Web Apps + Backend</span>
            <span style={chipStyle}>App Store + TestFlight</span>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                background: "transparent",
                color: "#f4d27a",
                border: "1px solid #f4d27a",
                padding: "15px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Work
            </a>

            <a
              href="mailto:matt@echosignalmedia.com?subject=Project Inquiry"
              style={{
                border: "1px solid rgba(212,160,23,0.35)",
                color: "#f4d27a",
                padding: "15px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                background: "rgba(212,160,23,0.06)",
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionTitle}>What I Help With</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "iOS App Development",
                text: "SwiftUI apps, bug fixes, feature work, polish, and shipping.",
              },
              {
                title: "Web App to Mobile",
                text: "Convert web apps into iOS apps with a clean submission flow and production-ready structure.",
              },
              {
                title: "Backend + Launch Support",
                text: "Supabase, APIs, auth, App Store Connect, TestFlight, and review fixes.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(212,160,23,0.12)",
                    color: "#f4d27a",
                    fontWeight: 800,
                    marginBottom: 16,
                    border: "1px solid rgba(212,160,23,0.2)",
                  }}
                >
                  ✦
                </div>
                <h3 style={{ fontSize: 26, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionTitle}>Why Clients Hire Me</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
              fontSize: 18,
            }}
          >
            {[
              "Fast communication and real problem solving",
              "Clean execution without overcomplicating the project",
              "Real App Store submission and review-fix experience",
              "I handle the technical side so clients can focus on the business",
            ].map((line) => (
              <div key={line} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: "#d4a017", fontWeight: 700 }}>◆</span>
                <span style={{ color: "rgba(255,255,255,0.82)" }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={{ width: "100%", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionTitle}>Selected Work</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                style={{
                  ...cardStyle,
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16 / 10",
                    objectFit: "cover",
                    display: "block",
                    borderBottom: "1px solid rgba(212,160,23,0.18)",
                  }}
                />

                <div style={{ padding: 24 }}>
                  <h3
                    style={{
                      fontSize: "clamp(24px, 4vw, 26px)",
                      lineHeight: 1.15,
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "0 24px 100px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "linear-gradient(180deg, #111827 0%, #0b1220 100%)",
            border: "1px solid rgba(212,160,23,0.22)",
            borderRadius: 24,
            padding: 36,
            boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#f4d27a",
              marginBottom: 10,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 700,
            }}
          >
            Let’s Work
          </div>

          <h2 style={{ fontSize: "clamp(32px, 6vw, 44px)", margin: "0 0 12px" }}>
            Need something built, fixed, or submitted?
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)",
              margin: "0 0 22px",
            }}
          >
            Let’s talk.
          </p>

          <a
            href="mailto:matt@echosignalmedia.com?subject=Project Inquiry"
            style={{
              background: "#d4a017",
              color: "#0f172a",
              padding: "14px 20px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 800,
              display: "inline-block",
            }}
          >
            Contact Matt
          </a>
        </div>
      </section>
    </main>
  );
}