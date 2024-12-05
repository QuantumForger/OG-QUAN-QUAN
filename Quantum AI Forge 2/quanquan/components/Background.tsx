import { theme } from '@/lib/theme'

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]" style={{ background: theme.gradients.primaryPower }} />
      <div className="fixed inset-0 z-[-1] opacity-5" style={{ backgroundImage: theme.backgrounds.neuralOverlay }} />
      <div className="fixed inset-0 z-[-1] opacity-10" style={{ backgroundImage: theme.backgrounds.quantumGrid }} />
    </>
  )
}

