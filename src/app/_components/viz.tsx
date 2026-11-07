import { useState, useRef, useEffect } from "react"

const DISCIPLINES = [
  { id: "ux", label: "UX Research/Design & Content", color: "#d95f02" },
  {
    id: "leadership",
    label: "Leadership & Senior Executive",
    color: "#1e7a8e",
  },
  { id: "product", label: "Product Mgmt & Strategy", color: "#f5a254" },
  {
    id: "ops",
    label: "Program & Operations Mgmt",
    color: "#c8c8c8",
    patternId: "pat-gray",
  },
  {
    id: "data",
    label: "Engineering, Data & IT",
    color: "#a8e0f0",
    patternId: "pat-sky",
  },
]

const SEGMENT_ORDER = ["ux", "product", "leadership", "data", "ops"]

const TENURE_GROUPS = [
  { label: "<3 years", key: "0to3" },
  { label: "3–5 years", key: "3to5" },
  { label: "6–10 years", key: "5to10" },
  { label: "11–20 years", key: "10to20" },
  { label: ">20 years", key: "20plus" },
]

const COUNTS: Record<string, Record<string, number>> = {
  "0to3": { ux: 10, leadership: 3, product: 3, data: 0, ops: 0 },
  "3to5": { ux: 2, leadership: 2, product: 3, data: 3, ops: 0 },
  "5to10": { ux: 4, leadership: 1, product: 3, data: 0, ops: 0 },
  "10to20": { ux: 2, leadership: 1, product: 0, data: 1, ops: 1 },
  "20plus": { ux: 0, leadership: 4, product: 0, data: 1, ops: 1 },
}

const MAX_COUNT = Math.max(
  ...TENURE_GROUPS.map((g) =>
    Object.values(COUNTS[g.key]).reduce((a, b) => a + b, 0),
  ),
)
const BAR_MAX_PX = 280

// Shared SVG pattern defs — defined once, referenced by all inline SVGs via url(#id)
function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable={false as unknown as boolean}
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* Sky blue: staggered offset dots */}
        <pattern
          id="pat-sky"
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <rect width="8" height="8" fill="#a8e0f0" />
          <circle cx="1" cy="1" r="1" fill="#386c7a" />
          <circle cx="5" cy="5" r="1" fill="#386c7a" />
        </pattern>
        {/* Gray: fine screen-print grain */}
        <pattern
          id="pat-gray"
          x="0"
          y="0"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <rect width="5" height="5" fill="#c8c8c8" />
          <circle cx="1" cy="1" r="0.8" fill="#686868" />
        </pattern>
      </defs>
    </svg>
  )
}

interface ActiveSeg {
  tenure: string
  discipline: string
  count: number
  rect: DOMRect
}

export function Viz() {
  const [active, setActive] = useState<ActiveSeg | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (chartRef.current && !chartRef.current.contains(e.target as Node)) {
        setActive(null)
      }
    }
    document.addEventListener("mousedown", onOutsideClick)
    return () => document.removeEventListener("mousedown", onOutsideClick)
  }, [])

  const handleSegClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    tenureKey: string,
    discId: string,
    count: number,
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    if (active?.tenure === tenureKey && active?.discipline === discId) {
      setActive(null)
    } else {
      setActive({ tenure: tenureKey, discipline: discId, count, rect })
    }
  }

  const activeTenureLabel = active
    ? (TENURE_GROUPS.find((g) => g.key === active.tenure)?.label ?? "")
    : ""

  const activeDisciplineLabel = active
    ? (DISCIPLINES.find((d) => d.id === active.discipline)?.label ?? "")
    : ""

  const tooltipPosition = (() => {
    if (!active || !chartRef.current) return null

    const chartRect = chartRef.current.getBoundingClientRect()
    const tooltipWidth = 220
    const gap = 12
    const isCenterBar = active.tenure === "5to10"

    if (isCenterBar) {
      const segmentCenter =
        active.rect.left - chartRect.left + active.rect.width / 2
      return {
        left: Math.max(
          0,
          Math.min(
            segmentCenter - tooltipWidth / 2,
            chartRect.width - tooltipWidth,
          ),
        ),
        top: active.rect.top - chartRect.top - gap,
        transform: "translateY(-100%)",
      }
    }

    const rightPosition = active.rect.right - chartRect.left + gap
    const fitsToRight = rightPosition + tooltipWidth <= chartRect.width

    return {
      left: fitsToRight
        ? rightPosition
        : active.rect.left - chartRect.left - gap - tooltipWidth,
      top: Math.max(0, active.rect.top - chartRect.top - 16),
      transform: "none",
    }
  })()

  return (
    <main className="visualization-page">
      {/* Pattern definitions — rendered once, referenced by all inline SVGs */}
      <SvgDefs />

      <div className="visualization">
        {/* Header row */}
        <header className="chart-header">
          <div className="chart-heading">
            <p className="chart-eyebrow">Interview participant overview</p>
            <h2 id="chart-title" className="chart-title">
              We spoke with workers across disciplines and tenure in government
            </h2>
          </div>

          <div className="chart-key">
            <ul className="legend">
              {DISCIPLINES.map((d) => (
                <li key={d.id} className="legend-item">
                  {/* SVG circle swatch — pattern fills survive Figma clipboard copy */}
                  <svg
                    width="16"
                    height="16"
                    aria-hidden="true"
                    className="legend-swatch"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="8"
                      fill={d.patternId ? `url(#${d.patternId})` : d.color}
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="7.5"
                      fill="none"
                      stroke="rgba(0,0,0,0.18)"
                      strokeWidth="1"
                    />
                  </svg>
                  {d.label}
                </li>
              ))}
            </ul>
            <p className="participant-total">n = 45 participants</p>
          </div>
        </header>

        {/* Chart */}
        <div
          ref={chartRef}
          className="chart"
          role="figure"
          aria-labelledby="chart-title"
          aria-describedby="chart-instructions"
          onKeyDown={(e) => {
            if (e.key === "Escape") setActive(null)
          }}
        >
          <p id="chart-instructions" className="visually-hidden">
            Stacked bar chart showing participant disciplines by length of
            service. Tab through each non-zero segment and press Enter or Space
            to highlight that discipline across tenure groups. Press Escape to
            clear the selection. A data table follows the chart.
          </p>
          <div className="bars">
            {TENURE_GROUPS.map((group) => {
              const total = Object.values(COUNTS[group.key]).reduce(
                (a, b) => a + b,
                0,
              )
              const barH = (total / MAX_COUNT) * BAR_MAX_PX

              return (
                <div key={group.key} className="bar-column">
                  <div className="bar-stack" style={{ height: `${barH}px` }}>
                    {SEGMENT_ORDER.map((discId) => {
                      const count = COUNTS[group.key][discId] ?? 0
                      if (count === 0) return null
                      const disc = DISCIPLINES.find((d) => d.id === discId)!
                      const segH = total > 0 ? (count / total) * barH : 0
                      const isSelected =
                        active?.tenure === group.key &&
                        active?.discipline === discId
                      const isRelated = active?.discipline === discId

                      return (
                        <button
                          key={discId}
                          type="button"
                          onClick={(e) =>
                            handleSegClick(e, group.key, discId, count)
                          }
                          title={`${disc.label} – ${count} participant${count !== 1 ? "s" : ""
                            }`}
                          className="bar-segment"
                          style={{
                            height: `${segH}px`,
                            minHeight: segH > 0 ? "4px" : 0,
                            zIndex: isRelated ? 2 : 1,
                          }}
                          aria-label={`${disc.label}, ${group.label}: ${count} participant${count !== 1 ? "s" : ""
                            }`}
                          aria-pressed={isSelected}
                          aria-describedby={
                            isSelected ? "chart-popover" : undefined
                          }
                        >
                          {/* Inline SVG carries both the fill/texture and the selection outline.
                              SVG pattern fills survive Figma clipboard copy; CSS backgroundImage does not. */}
                          <svg
                            width="100%"
                            height="100%"
                            className="segment-graphic"
                            aria-hidden="true"
                          >
                            <rect
                              width="100%"
                              height="100%"
                              fill={
                                disc.patternId
                                  ? `url(#${disc.patternId})`
                                  : disc.color
                              }
                            />
                            {(isSelected || isRelated) && (
                              <rect
                                width="100%"
                                height="100%"
                                fill="none"
                                stroke="#111"
                                strokeWidth={isSelected ? 8 : 5}
                                strokeLinejoin="miter"
                              />
                            )}
                          </svg>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* X-axis labels */}
          <div className="axis-labels">
            {TENURE_GROUPS.map((group) => (
              <div key={group.key} className="axis-label">
                {group.label}
              </div>
            ))}
          </div>

          {/* Screen-reader data table */}
          <table className="visually-hidden">
            <caption>
              Participant counts by length of service and discipline
            </caption>
            <thead>
              <tr>
                <th scope="col">Length of service</th>
                {DISCIPLINES.map((disc) => (
                  <th key={disc.id} scope="col">
                    {disc.label}
                  </th>
                ))}
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {TENURE_GROUPS.map((group) => {
                const total = Object.values(COUNTS[group.key]).reduce(
                  (sum, c) => sum + c,
                  0,
                )
                return (
                  <tr key={group.key}>
                    <th scope="row">{group.label}</th>
                    {DISCIPLINES.map((disc) => (
                      <td key={disc.id}>{COUNTS[group.key][disc.id] ?? 0}</td>
                    ))}
                    <td>{total}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* Tooltip */}
          {active && tooltipPosition && (
            <div
              id="chart-popover"
              className="chart-tooltip"
              style={{
                left: `${tooltipPosition.left}px`,
                top: `${tooltipPosition.top}px`,
                transform: tooltipPosition.transform,
              }}
            >
              <p className="tooltip-title">{activeDisciplineLabel}</p>
              <p className="tooltip-count">
                {active.count} participant{active.count !== 1 ? "s" : ""}
              </p>
              <p className="tooltip-tenure">{activeTenureLabel} tenure</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="tooltip-dismiss"
                aria-label="Dismiss chart details"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}