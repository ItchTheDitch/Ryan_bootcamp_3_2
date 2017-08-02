import { ExamHari3Page } from './app.po';

describe('exam-hari3 App', () => {
  let page: ExamHari3Page;

  beforeEach(() => {
    page = new ExamHari3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
