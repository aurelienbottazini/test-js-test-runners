
import sum2413 from '../sum2413.js';
import { expect, test } from 'vitest';

test('adds 80 + 23 to equal 103 + offset 0.987260109499084', () => {
  expect(sum2413(80, 23)).toBe(103 + 0.987260109499084);
});
