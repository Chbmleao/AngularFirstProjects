import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TicTacToeModule } from './tic-tac-toe';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TicTacToeModule],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
