import { render, screen } from '@testing-library/angular';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  it('should create', async () => {
    await render(HomePage, {
      imports: [IonicModule.forRoot()]
    });

    expect(screen.getByText('text that is not present in the component'));
  });
});
