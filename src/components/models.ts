import { DefineComponent } from 'vue';

export interface Panel {
  name: string;
  label: string;
  icon: string;
  component?: DefineComponent;
}
