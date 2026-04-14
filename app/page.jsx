export default function Home() {
  const cardStyle = {
    background: "#111827",
    border: "1px solid rgba(212,160,23,0.18)",
    borderRadius: 20,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  };

  const sectionTitle = {
    fontSize: 38,
    marginBottom: 20,
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

  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "radial-gradient(circle at top, rgba(212,160,23,0.08), transparent 22%), #0f172a",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "88px 24px",
          borderBottom: "1px solid rgba(212,160,23,0.16)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 14,
              color: "#f4d27a",
              marginBottom: 14,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 700,
            }}
          >
            Echo Signal Media
          </div>

          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              margin: "0 0 18px",
              fontWeight: 800,
              maxWidth: 860,
              letterSpacing: "-0.03em",
            }}
          >
            Apps built. Bugs fixed. App Store submissions handled.
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760,
              margin: "0 0 28px",
            }}
          >
            I help founders launch, fix, and ship iOS and web apps without
            getting stuck in technical chaos.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <span style={chipStyle}>SwiftUI + iOS</span>
            <span style={chipStyle}>Web Apps + Backend</span>
            <span style={chipStyle}>App Store + TestFlight</span>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid transparent",
              }}
            >
              View Work
            </a>

            <a
              href="mailto:matt@echosignalmedia.com?subject=Project Inquiry"
              style={{
                border: "1px solid rgba(212,160,23,0.35)",
                color: "#f4d27a",
                padding: "14px 20px",
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

      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={sectionTitle}>What I Help With</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
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
                    width: 42,
                    height: 42,
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
                <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={sectionTitle}>Why Clients Hire Me</h2>

          <div style={{ display: "grid", gap: 14, color: "rgba(255,255,255,0.82)", fontSize: 18 }}>
            {[
              "Fast communication and real problem solving",
              "Clean execution without overcomplicating the project",
              "Real App Store submission and review-fix experience",
              "I handle the technical side so clients can focus on the business",
            ].map((line) => (
              <div key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#d4a017", fontWeight: 700 }}>◆</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={sectionTitle}>Selected Work</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
            {[
              {
                title: "App Store Submission Fixes",
                text: "Resolved submission blockers and helped apps move back into review cleanly.",
              },
              {
                title: "Backend + Auth Work",
                text: "Connected app flows to Supabase and cleaned up broken login and data logic.",
              },
              {
                title: "Mobile MVP Builds",
                text: "Built and polished SwiftUI apps for real clients with a focus on speed and stability.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h3 style={{ fontSize: 24, margin: "0 0 10px", color: "#ffffff" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "0 24px 88px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "linear-gradient(180deg, #111827 0%, #0b1220 100%)",
            border: "1px solid rgba(212,160,23,0.22)",
            borderRadius: 24,
            padding: 32,
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

          <h2 style={{ fontSize: 40, margin: "0 0 12px" }}>
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