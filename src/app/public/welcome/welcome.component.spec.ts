import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let p: HTMLElement

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
  });

  it('should display welcome title', () => {
    fixture.detectChanges();
    expect(p.textContent).toContain(component.title);
  })

});
