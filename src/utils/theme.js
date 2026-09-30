/**
 * Swiss brutalism: the structural honesty of neo-brutalism (exposed grid,
 * hard edges, flat surfaces, no gradients or blur) executed with the
 * restraint of Swiss minimalism: one accent, hairline rules, no rotation.
 */
export const colors = {
  bg: '#F1F0EC', // warm neutral canvas
  paper: '#FBFAF8', // surface
  ink: '#141414', // near-black, never pure #000
  muted: '#6B6B65', // secondary text, 4.9:1 on paper
  line: '#D8D6CF', // hairline rules and borders
  control: '#8E8C84', // interactive borders, 3:1 on paper (WCAG 1.4.11)
  accent: '#1E4A42', // deep petrol, the single colour that carries meaning
  accentSoft: '#E5EAE8',
}

export const fonts = {
  display: `'Instrument Sans', 'Helvetica Neue', Arial, sans-serif`,
  body: `'Inter', 'Helvetica Neue', Arial, sans-serif`,
  mono: `'JetBrains Mono', 'SF Mono', Menlo, monospace`,
}

export const border = `1px solid ${colors.line}`
export const borderStrong = `1px solid ${colors.ink}`
export const radius = '3px'

export const media = {
  md: '@media (min-width: 768px)',
}
