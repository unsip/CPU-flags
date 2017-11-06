export const DEFAULT_QUERY = ""
export const FLAGS = {
  "fpu": {
     description: "Floating Point Unit On-Chip. The processor contains an x87 FPU.",
     links: [["Floating Point Unit", "https://en.wikipedia.org/wiki/Floating-point_unit"]]
  },
  "vme": {
     description: "Virtual 8086 mode enhancements, including CR4.VME for controlling the feature, CR4.PVI for protected mode virtual interrupts, software interrupt indirection, expansion of the TSS with the software indirection bitmap, and EFLAGS.VIF and EFLAGS.VIP flags.",
     links: [[ "Virtual 8086 mode", "https://en.wikipedia.org/wiki/Virtual_8086_mode#Virtual_8086_mode_enhancements_.28VME.29"]]
  },
  "de": {
     description: "Debugging Extensions. Support for I/O breakpoints, including CR4.DE for controlling the feature, and optional trapping of accesses to DR4 and DR5.",
     links: ["https://en.wikipedia.org/wiki/Control_register#CR4"]
  },
  "pse": {
     description: "Page Size Extension. Large pages of size 4 MByte are supported, including CR4.PSE for controlling the feature, the defined dirty bit in PDE (Page Directory Entries), optional reserved bit trapping in CR3, PDEs, and PTEs.",
     links: [["Page Size Extension", "http://en.wikipedia.org/wiki/Page_Size_Extension"], ["Page Directory Extension", "https://en.wikipedia.org/wiki/Page_(computer_memory)"]]
  },
  "tsc": {
     description: "Time Stamp Counter. The RDTSC instruction is supported, including CR4.TSD for controlling privilege.",
     links: [[ "Time Stamp Counter", "http://en.wikipedia.org/wiki/Time_Stamp_Counter"], ["RDTSC", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]]
  },
  "msr": {
     description: "Model Specific Registers RDMSR and WRMSR Instructions. The RDMSR and WRMSR instructions are supported. Some of the MSRs are implementation dependent.",
     links: [[ "Model Specific Registers", "http://en.wikipedia.org/wiki/Model-specific_register"]]
  }
}

// export const FLAGS = {
//   "fpu": {
//      description: "Floating Point Unit On-Chip. The processor contains an x87 FPU.",
//      links: ["https://en.wikipedia.org/wiki/Floating-point_unit"]
//   },
//   "vme": {
//      description: "Virtual 8086 mode enhancements, including CR4.VME for controlling the feature, CR4.PVI for protected mode virtual interrupts, software interrupt indirection, expansion of the TSS with the software indirection bitmap, and EFLAGS.VIF and EFLAGS.VIP flags.",
//      links: ["https://en.wikipedia.org/wiki/Virtual_8086_mode#Virtual_8086_mode_enhancements_.28VME.29"]
//   },
//   "de": {
//      description: "Debugging Extensions. Support for I/O breakpoints, including CR4.DE for controlling the feature, and optional trapping of accesses to DR4 and DR5.",
//      links: ["https://en.wikipedia.org/wiki/Control_register#CR4"]
//   },
//   "pse": {
//      description: "Page Size Extension. Large pages of size 4 MByte are supported, including CR4.PSE for controlling the feature, the defined dirty bit in PDE (Page Directory Entries), optional reserved bit trapping in CR3, PDEs, and PTEs.",
//      links: ["http://en.wikipedia.org/wiki/Page_Size_Extension", "https://en.wikipedia.org/wiki/Page_(computer_memory)"]
//   },
//   "tsc": {
//      description: "Time Stamp Counter. The RDTSC instruction is supported, including CR4.TSD for controlling privilege.",
//      links: ["http://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "msr": {
//      description: "Model Specific Registers RDMSR and WRMSR Instructions. The RDMSR and WRMSR instructions are supported. Some of the MSRs are implementation dependent.",
//      links: ["http://en.wikipedia.org/wiki/Model-specific_register"]
//   },
//   "pae": {
//      description: "Physical Address Extension. Physical addresses greater than 32 bits are supported: extended page table entry formats, an extra level in the page translation tables is defined, 2-MByte pages are supported instead of 4 Mbyte pages if PAE bit is 1. The actual number of address bits beyond 32 is not defined, and is implementation specific.",
//      links: ["http://en.wikipedia.org/wiki/Physical_Address_Extension"]
//   },
//   "mce": {
//      description: "Machine Check Exception. Exception 18 is defined for Machine Checks, including CR4.MCE for controlling the feature. This feature does not define the model-specific implementations of machine-check error logging, reporting, and processor shutdowns. Machine Check exception handlers may have to depend on processor version to do model specific processing of the exception, or test for the presence of the Machine Check feature.",
//      links: ["http://en.wikipedia.org/wiki/Machine_Check_Exception"]
//   },
//   "cx8": {
//      description: "CMPXCHG8B Instruction. The compare-and-exchange 8 bytes (64 bits) instruction is supported (implicitly locked and atomic).",
//      links: ["http://www.felixcloutier.com/x86/CMPXCHG8B:CMPXCHG16B.html"]
//   },
//   "apic": {
//      description: "APIC On-Chip. The processor contains an Advanced Programmable Interrupt Controller (APIC), responding to memory mapped commands in the physical address range FFFE0000H to FFFE0FFFH (by default - some processors permit the APIC to be relocated).",
//      links: ["http://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller"]
//   },
//   "sep": {
//      description: "SYSENTER and SYSEXIT Instructions. The SYSENTER and SYSEXIT and associated MSRs are supported. 12 MTRR Memory Type Range Registers. MTRRs are supported. The MTRRcap MSR contains feature bits that describe what memory types are supported, how many variable MTRRs are supported, and whether fixed MTRRs are supported.",
//      links: ["http://www.felixcloutier.com/x86/SYSENTER.html", "http://www.felixcloutier.com/x86/SYSEXIT.html"]
//   },
//   "mtrr": {
//      description: "Memory Type Range Registers.",
//      links: ["http://en.wikipedia.org/wiki/Memory_Type_Range_Registers"]
//   },
//   "pge": {
//      description: "PTE Global Bit. The global bit in page directory entries (PDEs) and page table entries (PTEs) is supported, indicating TLB entries that are common to different processes and need not be flushed. The CR4.PGE bit controls this feature.",
//      links: ["https://en.wikipedia.org/wiki/Translation_lookaside_buffer#Address_space_switch"]
//   },
//   "mca": {
//      description: "Machine Check Architecture. The Machine Check Architecture, which provides a compatible mechanism for error reporting in P6 family, Pentium 4, Intel Xeon processors, and future processors, is supported. The MCG_CAP MSR contains feature bits describing how many banks of error reporting MSRs are supported.",
//      links: ["http://en.wikipedia.org/wiki/Machine_check_architecture"]
//   },
//   "cmov": {
//      description: "Conditional Move Instructions. The conditional move instruction CMOV is supported. In addition, if x87 FPU is present as indicated by the CPUID.FPU feature bit, then the FCOMI and FCMOV instructions are supported",
//      links: ["http://www.rcollins.org/p6/opcodes/CMOV.html", "http://en.wikipedia.org/wiki/FCMOV"]
//   },
//   "pat": {
//      description: "Page Attribute Table. Page Attribute Table is supported. This feature augments the Memory Type Range Registers (MTRRs), allowing an operating system to specify attributes of memory on a 4K granularity through a linear address.",
//      links: ["http://en.wikipedia.org/wiki/Page_Attribute_Table"]
//   },
//   "pse36": {
//      description: "36-bit PSEs.",
//      links: ["http://en.wikipedia.org/wiki/PSE-36"]
//   },
//   "pn": {
//      description: "Processor serial number.",
//      links: ["http://en.wikipedia.org/wiki/CPUID#EAX.3D3:_Processor_Serial_Number"]
//   },
//   "clflush": {
//      description: "CLFLUSH instruction.",
//      links: ["https://en.wikipedia.org/wiki/CPU_cache#CACHE-LINES"]
//   },
//   "dts": {
//      description: "Debug Store.",
//      links: []
//   },
//   "acpi": {
//      description: "Thermal Monitor and Software Controlled Clock Facilities. The processor implements internal MSRs that allow processor temperature to be monitored and processor performance to be modulated in predefined duty cycles under software control.",
//      links: ["http://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface"]
//   },
//   "mmx": {
//      description: "Intel MMX Technology. The processor supports the Intel MMX technology.",
//      links: ["http://en.wikipedia.org/wiki/MMX_%28instruction_set%29"]
//   },
//   "fxsr": {
//      description: "FXSAVE and FXRSTOR Instructions. The FXSAVE and FXRSTOR instructions are supported for fast save and restore of the floating point context. Presence of this bit also indicates that CR4.OSFXSR is available for an operating system to indicate that it supports the FXSAVE and FXRSTOR instructions.",
//      links: ["https://en.wikipedia.org/wiki/Control_register#CR4"]
//   },
//   "sse": {
//      description: "Intel SSE vector instructions (a.k.a. Katmai New Instructions).",
//      links: ["http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions"]
//   },
//   "sse2": {
//      description: "The processor supports the SSE2 extensions.",
//      links: ["http://en.wikipedia.org/wiki/SSE2"]
//   },
//   "ss": {
//      description: "Self Snoop. The processor supports the management of conflicting memory types by performing a snoop of its own cache structure for transactions issued to the bus.",
//      links: ["http://en.wikipedia.org/wiki/Cache_snooping"]
//   },
//   "ht": {
//      description: "Hyper-Threading.",
//      links: ["http://en.wikipedia.org/wiki/Hyperthreading"]
//   },
//   "tm": {
//      description: "Thermal Monitor. The processor implements the thermal monitor automatic thermal control circuitry (TCC).",
//      links: []
//   },
//   "ia64": {
//      description: "IA-64 processor.",
//      links: ["http://en.wikipedia.org/wiki/IA-64"]
//   },
//   "pbe": {
//      description: "Pending Break Enable. The processor supports the use of the FERR#/PBE# pin when the processor is in the stop-clock state (STPCLK# is asserted) to signal the processor that an interrupt is pending and that the processor should return to normal operation to handle the interrupt. Bit 10 (PBE enable) in the IA32_MISC_ENABLE MSR enables this capability.",
//      links: ["https://en.wikipedia.org/wiki/CPUID#EAX.3D1:_Processor_Info_and_Feature_Bits"]
//   },
//   "syscall": {
//      description: "SYSCALL/SYSRET.",
//      links: ["http://www.felixcloutier.com/x86/SYSCALL.html", "http://www.felixcloutier.com/x86/SYSRET.html"]
//   },
//   "mp": {
//      description: "MP Capable..",
//      links: ["https://en.wikipedia.org/wiki/Multiprocessing"]
//   },
//   "nx": {
//      description: "Execute Disable.",
//      links: ["http://en.wikipedia.org/wiki/NX_bit"]
//   },
//   "mmxext": {
//      description: "AMD MMX extensions.",
//      links: ["http://en.wikipedia.org/wiki/MMX_%28instruction_set%29"]
//   },
//   "fxsr_opt": {
//      description: "FXSAVE/FXRSTOR optimizations.",
//      links: []
//   },
//   "pdpe1gb": {
//      description: "One GB pages (allows hugepagesz=1G).",
//      links: ["https://en.wikipedia.org/wiki/Page_(computer_memory)"]
//   },
//   "rdtscp": {
//      description: "RDTSCP.",
//      links: ["http://www.felixcloutier.com/x86/RDTSCP.html"]
//   },
//   "lm": {
//      description: "Long Mode (x86-64).",
//      links: ["https://en.wikipedia.org/wiki/Long_mode"]
//   },
//   "3dnowext": {
//      description: "AMD 3DNow! extensions.",
//      links: ["https://en.wikipedia.org/wiki/3DNow%21#3DNow_extensions"]
//   },
//   "3dnow": {
//      description: "3DNow!.",
//      links: ["http://en.wikipedia.org/wiki/3DNow%21"]
//   },
//   "recovery": {
//      description: "CPU in recovery mode.",
//      links: []
//   },
//   "longrun": {
//      description: "Longrun power control.",
//      links: []
//   },
//   "lrti": {
//      description: "LongRun table interface.",
//      links: []
//   },
//   "cxmmx": {
//      description: "Cyrix MMX extensions.",
//      links: ["https://en.wikipedia.org/wiki/Extended_MMX"]
//   },
//   "k6_mtrr": {
//      description: "AMD K6 nonstandard MTRRs.",
//      links: ["https://en.wikipedia.org/wiki/Memory_type_range_register"]
//   },
//   "cyrix_arr": {
//      description: "Cyrix ARRs (= MTRRs).",
//      links: ["https://en.wikipedia.org/wiki/Memory_type_range_register", "https://en.wikipedia.org/wiki/Address-range_register"]
//   },
//   "centaur_mcr": {
//      description: "Centaur MCRs (= MTRRs).",
//      links: ["https://en.wikipedia.org/wiki/Memory_type_range_register"]
//   },
//   "k8": {
//      description: "(hidden by default) Opteron, Athlon64.",
//      links: []
//   },
//   "k7": {
//      description: "(hidden by default) Athlon.",
//      links: []
//   },
//   "p3": {
//      description: "(hidden by default) P3.",
//      links: []
//   },
//   "p4": {
//      description: "(hidden by default) P4.",
//      links: []
//   },
//   "constant_tsc": {
//      description: "TSC ticks at a constant rate.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "up": {
//      description: "smp kernel running on up.",
//      links: ["https://en.wikipedia.org/wiki/Symmetric_multiprocessing"]
//   },
//   "art": {
//      description: "Platform has always running timer (ART).",
//      links: []
//   },
//   "arch_perfmon": {
//      description: "Intel Architectural PerfMon.",
//      links: ["http://www.intel.com/software/pcm"]
//   },
//   "pebs": {
//      description: "Precise-Event Based Sampling.",
//      links: ["https://xem.github.io/minix86/manual/intel-x86-and-64-manual-vol3/o_fe12b1e2a880e0ce-734.html"]
//   },
//   "bts": {
//      description: "Branch Trace Store.",
//      links: ["https://en.wikipedia.org/wiki/Branch_trace"]
//   },
//   "syscall32": {
//      description: "(hidden by default) syscall in ia32 userspace.",
//      links: []
//   },
//   "sysenter32": {
//      description: "(hidden by default) sysenter in ia32 userspace.",
//      links: []
//   },
//   "rep_good": {
//      description: "rep microcode works well.",
//      links: []
//   },
//   "mfence_rdtsc": {
//      description: "(hidden by default) Mfence synchronizes RDTSC.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "lfence_rdtsc": {
//      description: "(hidden by default) Lfence synchronizes RDTSC.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "acc_power": {
//      description: "AMD Accumulated Power Mechanism.",
//      links: ["https://lkml.org/lkml/2016/1/6/873"]
//   },
//   "nopl": {
//      description: "The NOPL (0F 1F) instructions.",
//      links: ["http://john.freml.in/amd64-nopl"]
//   },
//   "always": {
//      description: "(hidden by default) Always-present feature.",
//      links: []
//   },
//   "xtopology": {
//      description: "cpu topology enum extensions.",
//      links: []
//   },
//   "tsc_reliable": {
//      description: "TSC is known to be reliable.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "nonstop_tsc": {
//      description: "TSC does not stop in C states.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "cpuid": {
//      description: "CPU has CPUID instruction itself.",
//      links: ["http://x86.renejeschke.de/html/file_module_x86_id_45.html", "https://en.wikipedia.org/wiki/CPUID"]
//   },
//   "extd_apicid": {
//      description: "has extended APICID (8 bits).",
//      links: ["https://software.intel.com/en-us/articles/intel-64-architecture-processor-topology-enumeration"]
//   },
//   "amd_dcm": {
//      description: "multi-node processor.",
//      links: []
//   },
//   "aperfmperf": {
//      description: "APERFMPERF.",
//      links: ["https://lwn.net/Articles/283769/"]
//   },
//   "nonstop_tsc_s3": {
//      description: "TSC doesn't stop in S3 state.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "tsc_known_freq": {
//      description: "TSC has known frequency.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "pni": {
//      description: "SSE-3.",
//      links: ["https://en.wikipedia.org/wiki/SSE3", "https://en.wikipedia.org/wiki/Pentium_4#Prescott"]
//   },
//   "pclmulqdq": {
//      description: "PCLMULQDQ instruction.",
//      links: ["https://en.wikipedia.org/wiki/CLMUL_instruction_set", "http://www.felixcloutier.com/x86/PCLMULQDQ.html", "https://en.wikipedia.org/wiki/Galois/Counter_Mode"]
//   },
//   "dtes64": {
//      description: "64-bit Debug Store.",
//      links: []
//   },
//   "mwait": {
//      description: "Monitor/Mwait support.",
//      links: ["http://en.wikipedia.org/wiki/SSE3#Intel_instructions"]
//   },
//   "ds_cpl": {
//      description: "CPL Qualified Debug Store. A value of 1 indicates the processor supports the extensions to the Debug Store feature to allow for branch message storage qualified by CPL.",
//      links: []
//   },
//   "vmx": {
//      description: "Hardware virtualization.",
//      links: ["http://en.wikipedia.org/wiki/X86_virtualization#Intel_virtualization_.28VT-x.29", "https://en.wikipedia.org/wiki/X86_virtualization"]
//   },
//   "smx": {
//      description: "Safer mode.",
//      links: ["http://en.wikipedia.org/wiki/Trusted_Execution_Technology", "http://en.wikipedia.org/wiki/Trusted_Platform_Module", "https://en.wikipedia.org/wiki/LaGrande"]
//   },
//   "est": {
//      description: "Enhanced Intel SpeedStep technology.",
//      links: ["https://en.wikipedia.org/wiki/SpeedStep"]
//   },
//   "tm2": {
//      description: "Thermal Monitor 2.",
//      links: ["http://en.wikipedia.org/wiki/Tm2"]
//   },
//   "ssse3": {
//      description: "Supplemental SSE-3.",
//      links: ["https://en.wikipedia.org/wiki/SSSE3"]
//   },
//   "cid": {
//      description: "Context ID.",
//      links: []
//   },
//   "sdbg": {
//      description: "Silicon Debug.",
//      links: []
//   },
//   "fma": {
//      description: "Fused multiply-add.",
//      links: ["http://en.wikipedia.org/wiki/FMA_instruction_set"]
//   },
//   "cx16": {
//      description: "CMPXCHG16B.",
//      links: ["https://en.wikipedia.org/wiki/Double_compare-and-swap"]
//   },
//   "xtpr": {
//      description: "Send Task Priority Messages.",
//      links: []
//   },
//   "pdcm": {
//      description: "Performance Capabilities.",
//      links: []
//   },
//   "pcid": {
//      description: "Process Context Identifiers.",
//      links: []
//   },
//   "dca": {
//      description: "Direct Cache Access.",
//      links: []
//   },
//   "sse4_1": {
//      description: "SSE-4.1.",
//      links: ["http://en.wikipedia.org/wiki/SSE4.1#SSE4.1"]
//   },
//   "sse4_2": {
//      description: "SSE-4.2.",
//      links: ["http://en.wikipedia.org/wiki/SSE4.2#SSE4.2"]
//   },
//   "x2apic": {
//      description: "x2APIC.",
//      links: ["http://en.wikipedia.org/wiki/X2APIC"]
//   },
//   "movbe": {
//      description: "MOVBE instruction.",
//      links: ["http://www.felixcloutier.com/x86/MOVBE.html", "https://en.wikipedia.org/wiki/Big-endian"]
//   },
//   "popcnt": {
//      description: "POPCNT instruction.",
//      links: ["https://en.wikipedia.org/wiki/Popcnt", "http://en.wikipedia.org/wiki/SSE4#POPCNT_and_LZCNT", "http://en.wikipedia.org/wiki/Hamming_weight"]
//   },
//   "tsc_deadline_timer": {
//      description: "Tsc deadline timer.",
//      links: ["https://en.wikipedia.org/wiki/Time_Stamp_Counter", "http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"]
//   },
//   "aes": {
//      description: "AES instructions.",
//      links: ["http://en.wikipedia.org/wiki/AES_instruction_set"]
//   },
//   "xsave": {
//      description: "XSAVE/XRSTOR/XSETBV/XGETBV.",
//      links: ["http://www.felixcloutier.com/x86/XSAVE.html", "http://www.felixcloutier.com/x86/XGETBV.html", "http://www.felixcloutier.com/x86/XRSTOR.html", "http://www.felixcloutier.com/x86/XSETBV.html"]
//   },
//   "osxsave": {
//      description: "(hidden by default) XSAVE enabled in the OS.",
//      links: ["http://www.felixcloutier.com/x86/XSAVE.html"]
//   },
//   "avx": {
//      description: "Advanced Vector Extensions.",
//      links: ["http://en.wikipedia.org/wiki/Advanced_Vector_Extensions"]
//   },
//   "f16c": {
//      description: "16-bit fp conversions.",
//      links: ["https://en.wikipedia.org/wiki/F16C", "https://en.wikipedia.org/wiki/Half-precision", "http://en.wikipedia.org/wiki/CVT16_instruction_set"]
//   },
//   "rdrand": {
//      description: "The RDRAND instruction.",
//      links: ["http://en.wikipedia.org/wiki/RdRand", "http://www.felixcloutier.com/x86/RDRAND.html"]
//   },
//   "hypervisor": {
//      description: "Running on a hypervisor.",
//      links: ["https://en.wikipedia.org/wiki/Hypervisor"]
//   },
//   "rng": {
//      description: "RNG present (xstore).",
//      links: ["https://en.wikipedia.org/wiki/Random_number_generation"]
//   },
//   "rng_en": {
//      description: "RNG enabled.",
//      links: ["https://en.wikipedia.org/wiki/Random_number_generation"]
//   },
//   "ace": {
//      description: "on-CPU crypto (xcrypt).",
//      links: [""]
//   },
//   "ace_en": {
//      description: "on-CPU crypto enabled.",
//      links: []
//   },
//   "ace2": {
//      description: "Advanced Cryptography Engine v2.",
//      links: []
//   },
//   "ace2_en": {
//      description: "ACE v2 enabled.",
//      links: []
//   },
//   "phe": {
//      description: "PadLock Hash Engine.",
//      links: []
//   },
//   "phe_en": {
//      description: "PHE enabled.",
//      links: []
//   },
//   "pmm": {
//      description: "PadLock Montgomery Multiplier.",
//      links: []
//   },
//   "pmm_en": {
//      description: "PMM enabled.",
//      links: []
//   },
//   "lahf_lm": {
//      description: "LAHF/SAHF in long mode.",
//      links: ["http://x86.renejeschke.de/html/file_module_x86_id_148.html"]
//   },
//   "cmp_legacy": {
//      description: "If yes HyperThreading not valid.",
//      links: []
//   },
//   "svm": {
//      description: "Secure virtual machine.",
//      links: ["http://en.wikipedia.org/wiki/X86_virtualization#AMD_virtualization_.28AMD-V.29"]
//   },
//   "extapic": {
//      description: "Extended APIC space.",
//      links: []
//   },
//   "cr8_legacy": {
//      description: "CR8 in 32-bit mode.",
//      links: []
//   },
//   "abm": {
//      description: "Advanced bit manipulation.",
//      links: ["https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#ABM_.28Advanced_Bit_Manipulation.29"]
//   },
//   "sse4a": {
//      description: "SSE-4A.",
//      links: ["http://en.wikipedia.org/wiki/SSE4#SSE4a"]
//   },
//   "misalignsse": {
//      description: "Misaligned SSE mode.",
//      links: []
//   },
//   "3dnowprefetch": {
//      description: "3DNow prefetch instructions.",
//      links: ["https://en.wikipedia.org/wiki/3DNow!"]
//   },
//   "osvw": {
//      description: "OS Visible Workaround.",
//      links: ["http://developer.amd.com/wordpress/media/2012/10/24593_APM_v21.pdf"]
//   },
//   "ibs": {
//      description: "Instruction Based Sampling.",
//      links: ["https://en.wikipedia.org/wiki/Hardware_performance_counter#Instruction_based_sampling"]
//   },
//   "xop": {
//      description: "extended AVX instructions.",
//      links: ["http://en.wikipedia.org/wiki/XOP_instruction_set"]
//   },
//   "skinit": {
//      description: "SKINIT/STGI instructions.",
//      links: []
//   },
//   "wdt": {
//      description: "Watchdog timer.",
//      links: ["https://en.wikipedia.org/wiki/Watchdog_timer"]
//   },
//   "lwp": {
//      description: "Light Weight Profiling.",
//      links: ["https://en.wikipedia.org/wiki/Profiling_(computer_programming)"]
//   },
//   "fma4": {
//      description: "4 operands MAC instructions.",
//      links: ["http://en.wikipedia.org/wiki/FMA_instruction_set"]
//   },
//   "tce": {
//      description: "translation cache extension.",
//      links: []
//   },
//   "nodeid_msr": {
//      description: "NodeId MSR.",
//      links: []
//   },
//   "tbm": {
//      description: "trailing bit manipulations.",
//      links: ["https://en.wikipedia.org/wiki/Bit_Manipulation_Instruction_Sets#TBM"]
//   },
//   "topoext": {
//      description: "topology extensions CPUID leafs.",
//      links: []
//   },
//   "perfctr_core": {
//      description: "core performance counter extensions.",
//      links: []
//   },
//   "perfctr_nb": {
//      description: "NB performance counter extensions.",
//      links: []
//   },
//   "bpext": {
//      description: "data breakpoint extension.",
//      links: []
//   },
//   "ptsc": {
//      description: "performance time-stamp counter.",
//      links: []
//   },
//   "perfctr_llc": {
//      description: "Last Level Cache performance counter extensions.",
//      links: []
//   },
//   "mwaitx": {
//      description: "MWAIT extension (MONITORX/MWAITX).",
//      links: []
//   },
//   "ring3mwait": {
//      description: "Ring 3 MONITOR/MWAIT.",
//      links: []
//   },
//   "cpuid_fault": {
//      description: "Intel CPUID faulting.",
//      links: []
//   },
//   "cpb": {
//      description: "AMD Core Performance Boost.",
//      links: []
//   },
//   "epb": {
//      description: "IA32_ENERGY_PERF_BIAS support.",
//      links: []
//   },
//   "cat_l3": {
//      description: "Cache Allocation Technology L3.",
//      links: []
//   },
//   "cat_l2": {
//      description: "Cache Allocation Technology L2.",
//      links: []
//   },
//   "cdp_l3": {
//      description: "Code and Data Prioritization L3.",
//      links: []
//   },
//   "hw_pstate": {
//      description: "AMD HW-PState.",
//      links: []
//   },
//   "proc_feedback": {
//      description: "AMD ProcFeedbackInterface.",
//      links: []
//   },
//   "sme": {
//      description: "AMD Secure Memory Encryption.",
//      links: []
//   },
//   "intel_ppin": {
//      description: "Intel Processor Inventory Number.",
//      links: []
//   },
//   "intel_pt": {
//      description: "Intel Processor Trace.",
//      links: ["https://software.intel.com/en-us/blogs/2013/09/18/processor-tracing"]
//   },
//   "avx512_4vnniw": {
//      description: "AVX-512 Neural Network Instructions.",
//      links: []
//   },
//   "avx512_4fmaps": {
//      description: "AVX-512 Multiply Accumulation Single precision.",
//      links: []
//   },
//   "mba": {
//      description: "Memory Bandwidth Allocation.",
//      links: []
//   },
//   "tpr_shadow": {
//      description: "Intel TPR Shadow.",
//      links: []
//   },
//   "vnmi": {
//      description: "Intel Virtual NMI.",
//      links: []
//   },
//   "flexpriority": {
//      description: "Intel FlexPriority.",
//      links: []
//   },
//   "ept": {
//      description: "Intel Extended Page Table.",
//      links: []
//   },
//   "vpid": {
//      description: "Intel Virtual Processor ID.",
//      links: []
//   },
//   "vmmcall": {
//      description: "Prefer vmmcall to vmcall.",
//      links: []
//   },
//   "xenpv": {
//      description: "(hidden by default) Xen paravirtual guest.",
//      links: []
//   },
//   "fsgsbase": {
//      description: "{RD/WR}{FS/GS}BASE instructions",
//      links: []
//   },
//   "tsc_adjust": {
//      description: "TSC adjustment MSR 0x3b.",
//      links: []
//   },
//   "bmi1": {
//      description: "1st group bit manipulation extensions.",
//      links: []
//   },
//   "hle": {
//      description: "Hardware Lock Elision.",
//      links: []
//   },
//   "avx2": {
//      description: "AVX2 instructions.",
//      links: []
//   },
//   "smep": {
//      description: "Supervisor Mode Execution Protection.",
//      links: []
//   },
//   "bmi2": {
//      description: "2nd group bit manipulation extensions.",
//      links: []
//   },
//   "erms": {
//      description: "Enhanced REP MOVSB/STOSB.",
//      links: []
//   },
//   "invpcid": {
//      description: "Invalidate Processor Context ID.",
//      links: []
//   },
//   "rtm": {
//      description: "Restricted Transactional Memory.",
//      links: []
//   },
//   "cqm": {
//      description: "Cache QoS Monitoring.",
//      links: []
//   },
//   "mpx": {
//      description: "Memory Protection Extension.",
//      links: []
//   },
//   "rdt_a": {
//      description: "Resource Director Technology Allocation.",
//      links: []
//   },
//   "avx512f": {
//      description: "AVX-512 Foundation.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "avx512dq": {
//      description: "AVX-512 DQ (Double/Quad granular) Instructions.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "rdseed": {
//      description: "The RDSEED instruction.",
//      links: []
//   },
//   "adx": {
//      description: "The ADCX and ADOX instructions.",
//      links: []
//   },
//   "smap": {
//      description: "Supervisor Mode Access Prevention.",
//      links: []
//   },
//   "avx512ifma": {
//      description: "AVX-512 Integer Fused Multiply-Add instructions.",
//      links: []
//   },
//   "clflushopt": {
//      description: "CLFLUSHOPT instruction.",
//      links: []
//   },
//   "clwb": {
//      description: "CLWB instruction.",
//      links: []
//   },
//   "avx512pf": {
//      description: "AVX-512 Prefetch.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "avx512er": {
//      description: "AVX-512 Exponential and Reciprocal.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "avx512cd": {
//      description: "AVX-512 Conflict Detection.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "sha_ni": {
//      description: "SHA1/SHA256 Instruction Extensions.",
//      links: []
//   },
//   "avx512bw": {
//      description: "AVX-512 BW (Byte/Word granular) Instructions.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512#New_instructions_in_AVX-512_BW_and_DQ"]
//   },
//   "avx512vl": {
//      description: "AVX-512 VL (128/256 Vector Length) Extensions.",
//      links: ["https://en.wikipedia.org/wiki/AVX-512"]
//   },
//   "xsaveopt": {
//      description: "XSAVEOPT.",
//      links: []
//   },
//   "xsavec": {
//      description: "XSAVEC.",
//      links: []
//   },
//   "xgetbv1": {
//      description: "XGETBV with ECX = 1.",
//      links: []
//   },
//   "xsaves": {
//      description: "XSAVES/XRSTORS.",
//      links: []
//   },
//   "cqm_llc": {
//      description: "LLC QoS if 1.",
//      links: []
//   },
//   "cqm_occup_llc": {
//      description: "LLC occupancy monitoring if 1.",
//      links: []
//   },
//   "cqm_mbm_total": {
//      description: "LLC Total MBM monitoring.",
//      links: []
//   },
//   "cqm_mbm_local": {
//      description: "LLC Local MBM monitoring.",
//      links: []
//   },
//   "clzero": {
//      description: "CLZERO instruction.",
//      links: []
//   },
//   "irperf": {
//      description: "Instructions Retired Count.",
//      links: []
//   },
//   "dtherm": {
//      description: "Digital Thermal Sensor.",
//      links: []
//   },
//   "ida": {
//      description: "Intel Dynamic Acceleration.",
//      links: []
//   },
//   "arat": {
//      description: "Always Running APIC Timer.",
//      links: []
//   },
//   "pln": {
//      description: "Intel Power Limit Notification.",
//      links: []
//   },
//   "pts": {
//      description: "Intel Package Thermal Status.",
//      links: []
//   },
//   "hwp": {
//      description: "Intel Hardware P-states.",
//      links: []
//   },
//   "hwp_notify": {
//      description: "HWP Notification.",
//      links: []
//   },
//   "hwp_act_window": {
//      description: "HWP Activity Window.",
//      links: []
//   },
//   "hwp_epp": {
//      description: "HWP Energy Perf. Preference.",
//      links: []
//   },
//   "hwp_pkg_req": {
//      description: "HWP Package Level Request.",
//      links: []
//   },
//   "npt": {
//      description: "Nested Page Table support.",
//      links: []
//   },
//   "lbrv": {
//      description: "LBR Virtualization support.",
//      links: []
//   },
//   "svm_lock": {
//      description: "SVM locking MSR.",
//      links: []
//   },
//   "nrip_save": {
//      description: "SVM next_rip save.",
//      links: []
//   },
//   "tsc_scale": {
//      description: "TSC scaling support.",
//      links: []
//   },
//   "vmcb_clean": {
//      description: "VMCB clean bits support.",
//      links: []
//   },
//   "flushbyasid": {
//      description: "flush-by-ASID support.",
//      links: []
//   },
//   "decodeassists": {
//      description: "Decode Assists support.",
//      links: []
//   },
//   "pausefilter": {
//      description: "filtered pause intercept.",
//      links: []
//   },
//   "pfthreshold": {
//      description: "pause filter threshold.",
//      links: []
//   },
//   "avic": {
//      description: "Virtual Interrupt Controller.",
//      links: []
//   },
//   "v_vmsave_vmload": {
//      description: "Virtual VMSAVE VMLOAD.",
//      links: []
//   },
//   "vgif": {
//      description: "Virtual GIF.",
//      links: []
//   },
//   "avx512vbmi": {
//      description: "AVX512 Vector Bit Manipulation instructions",
//      links: []
//   },
//   "pku": {
//      description: "Protection Keys for Userspace.",
//      links: []
//   },
//   "ospke": {
//      description: "OS Protection Keys Enable.",
//      links: []
//   },
//   "avx512_vpopcntdq": {
//      description: "POPCNT for vectors of DW/QW.",
//      links: []
//   },
//   "la57": {
//      description: "5-level page tables.",
//      links: []
//   },
//   "rdpid": {
//      description: "RDPID instruction.",
//      links: []
//   },
//   "overflow_recov": {
//      description: "MCA overflow recovery support.",
//      links: []
//   },
//   "succor": {
//      description: "Uncorrectable error containment and recovery.",
//      links: []
//   },
//   "smca": {
//      description: "Scalable MCA.",
//      links: []
//   },
//   "f00f": {
//      description: "Intel F00F.",
//      links: []
//   },
//   "fdiv": {
//      description: "FPU FDIV.",
//      links: []
//   },
//   "coma": {
//      description: "Cyrix 6x86 coma.",
//      links: []
//   },
//   "tlb_mmatch": {
//      description: "AMD Erratum 383.",
//      links: []
//   },
//   "apic_c1e": {
//      description: "AMD Erratum 400.",
//      links: []
//   },
//   "11ap": {
//      description: "Bad local APIC aka 11AP.",
//      links: []
//   },
//   "fxsave_leak": {
//      description: "FXSAVE leaks FOP/FIP/FOP.",
//      links: []
//   },
//   "clflush_monitor": {
//      description: "AAI65, CLFLUSH required before MONITOR.",
//      links: []
//   },
//   "sysret_ss_attrs": {
//      description: "SYSRET doesn't fix up SS attrs.",
//      links: []
//   },
//   "espfix": {
//      description: "(hidden by default) IRET to 16-bit SS corrupts ESP/RSP high bits.",
//      links: []
//   },
//   "null_seg": {
//      description: "Nulling a selector preserves the base.",
//      links: []
//   },
//   "swapgs_fence": {
//      description: "SWAPGS without input dep on GS.",
//      links: []
//   },
//   "monitor": {
//      description: "IPI required to wake up remote CPU.",
//      links: []
//   },
//   "amd_e400": {
//      description: "CPU is among the affected by Erratum 400.",
//      links: []
//   }
// }
