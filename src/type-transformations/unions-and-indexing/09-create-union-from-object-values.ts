const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

type ProgramModeEnumMap = typeof programModeEnumMap
type IndividualProgram = ProgramModeEnumMap['ONE_ON_ONE' | 'SELF_DIRECTED' | 'PLANNED_ONE_ON_ONE' | 'PLANNED_SELF_DIRECTED']

type IndividualProgram1 = ProgramModeEnumMap[Exclude<keyof ProgramModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>]
