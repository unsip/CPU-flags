import React    from 'react'
import ReactDOM from 'react-dom'

import CpuFlags from './index.js'

describe('CpuFlags', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CpuFlags />, div)
  })

  it('filters results correctly', () => {
    const search = CpuFlags.prototype.searchFlags
    const flags = {
      "mmx": "Multimedia Extensions",
      "fdiv": "FPU FDIV",
      "coma": "Cyrix 6x86 coma",
      "msr": "Model-Specific Registers"
    }
    const testCases = [
      ["", 0],
      ["mmx kek fdiv", 2],
      ["@Dkd 2@(mmxFDIV)", 0],
      ["COMA mmx? $ FDIV  MMX", 3],
      ["MSR fDiV cooOma", 2]
    ]
    let caseLength

    for (let [input, expectedLength] of testCases) {
      caseLength = Object.keys(search(input, flags)).length
      expect(caseLength).toBe(expectedLength)
    }
  })
})
