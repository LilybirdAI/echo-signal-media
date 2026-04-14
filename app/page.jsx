export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#0f172a", color: "#ffffff" }}>
      <section style={{ padding: "88px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 14, color: "#93c5fd", marginBottom: 14 }}>
            Echo Signal Media
          </div>

          <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "0 0 18px", fontWeight: 800, maxWidth: 800 }}>
            Apps built. Bugs fixed. App Store submissions handled.
          </h1>

          <p style={{ fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.82)", maxWidth: 760, margin: "0 0 28px" }}>
            I help founders launch, fix, and ship iOS and web apps without getting stuck in technical chaos.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <span style={{ background: "rgba(255,255,255,0.08)", padding: "8px 12px", borderRadius: 999, fontSize: 13 }}>
              SwiftUI + iOS
            </span>
            <span style={{ background: "rgba(255,255,255,0.08)", padding: "8px 12px", borderRadius: 999, fontSize: 13 }}>
              Web Apps + Backend
            </span>
            <span style={{ background: "rgba(255,255,255,0.08)", padding: "8px 12px", borderRadius: 999, fontSize: 13 }}>
              App Store + TestFlight
            </span>
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
                fontWeight: 700
              }}
            >
              View Work
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 28 }}>What I Help With</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
            {[
              {
                title: "iOS App Development",
                text: "SwiftUI apps, bug fixes, feature work, polish, and shipping."
              },
              {
                title: "Web App to Mobile",
                text: "Convert web apps into iOS apps with a clean submission flow and production-ready structure."
              },
              {
                title: "Backend + Launch Support",
                text: "Supabase, APIs, auth, App Store Connect, TestFlight, and review fixes."
              }
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 24
                }}
              >
                <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 20 }}>Why Clients Hire Me</h2>

          <div style={{ display: "grid", gap: 14, color: "rgba(255,255,255,0.82)", fontSize: 18 }}>
            <div>• Fast communication and real problem solving</div>
            <div>• Clean execution without overcomplicating the project</div>
            <div>• Real App Store submission and review-fix experience</div>
            <div>• I handle the technical side so clients can focus on the business</div>
          </div>
        </div>
      </section>

      <section id="work" style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, marginBottom: 28 }}>Selected Work</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
            {[
              {
                title: "App Store Submission Fixes",
                text: "Resolved submission blockers and helped apps move back into review cleanly."
              },
              {
                title: "Backend + Auth Work",
                text: "Connected app flows to Supabase and cleaned up broken login and data logic."
              },
              {
                title: "Mobile MVP Builds",
                text: "Built and polished SwiftUI apps for real clients with a focus on speed and stability."
              }
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 24
                }}
              >
                <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
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
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 32
          }}
        >
          <h2 style={{ fontSize: 40, margin: "0 0 12px" }}>Need something built, fixed, or submitted?</h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.78)", margin: "0 0 22px" }}>
            Let’s talk.
          </p>

          <a
            href="mailto:matt@echosignalmedia.com"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "14px 20px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block"
            }}
          >
            Contact Matt
          </a>
        </div>
      </section>
    </main>
  );
}