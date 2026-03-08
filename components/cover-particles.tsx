"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const CoverParticles = () => {

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <Particles
          id="tsparticles"
          className="w-full h-full"
          options={{
            fpsLimit: 120,

            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: true
              }
            },

            particles: {

              number: {
                value: 120,
                density: {
                  enable: true
                }
              },

              color: {
                value: [
                  "#ffffff",
                  "#93c5fd",
                  "#a78bfa",
                  "#f0abfc",
                  "#67e8f9"
                ]
              },

              shape: {
                type: ["circle", "star", "triangle"]
              },

              opacity: {
                value: { min: 0.3, max: 0.9 },
                animation: {
                  enable: true,
                  speed: 0.6,
                  minimumValue: 0.2
                }
              },

              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 1
                }
              },

              move: {
                enable: true,
                speed: 0.2,
                random: true,
                outModes: {
                  default: "out"
                }
              },

              links: {
                enable: false
              }
            },

            emitters: [
              {
                direction: "top-right",
                rate: {
                  delay: 12,
                  quantity: 1
                },
                position: {
                  x: 0,
                  y: 100
                },
                particles: {
                  move: {
                    speed: 10
                  },
                  life: {
                    duration: {
                      sync: true,
                      value: 2
                    },
                    count: 1
                  },
                  size: {
                    value: { min: 2, max: 3 }
                  }
                }
              }
            ],

            detectRetina: true
          }}
        />
      </div>
    )
  )
}

export default CoverParticles