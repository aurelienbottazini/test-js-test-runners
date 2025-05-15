
import sum2773 from '../sum2773.js';
import { expect, test } from 'vitest';

test('adds 24 + 67 to equal 91 + offset 0.28938673084476163', () => {
  expect(sum2773(24, 67)).toBe(91 + 0.28938673084476163);
});
