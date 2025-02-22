import { CardModule } from './card.module';

describe('CardModule', () => {
  const module: CardModule = new CardModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
