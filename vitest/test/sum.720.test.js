
import sum720 from '../sum720.js';
import { expect, test } from 'vitest';

test('adds 7 + 30 to equal 37 + offset 0.6682946625054946', () => {
  expect(sum720(7, 30)).toBe(37 + 0.6682946625054946);
});
