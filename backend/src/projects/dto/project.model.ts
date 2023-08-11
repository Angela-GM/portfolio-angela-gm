import { Prop } from '@nestjs/mongoose';

export class Skills {
  @Prop()
  programmingLang: string[];

  @Prop()
  frameworks: string[];

  @Prop()
  libraries: string[];

  @Prop()
  backend: string[];

  @Prop()
  databases: string[];

  @Prop()
  testing: string[];

  @Prop()
  tools: string[];

  @Prop()
  others: string[];
}

export class Languages {
  @Prop()
  spanish: string;

  @Prop()
  english: string;

  @Prop()
  catalan: string;
}
