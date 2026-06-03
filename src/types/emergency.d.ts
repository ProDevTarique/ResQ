export interface ActionStep {
  id: string;
  instruction: string;
  image?: string;
  isCritical: boolean;
  options: {
    label: string;
    nextStepId: string | 'EMS_CALLED';
  }[];
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  steps: Record<string, ActionStep>;
}