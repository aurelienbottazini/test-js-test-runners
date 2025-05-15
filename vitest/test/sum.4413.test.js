
import sum4413 from '../sum4413.js';
import { expect, test } from 'vitest';

test('adds 5 + 87 to equal 92 + offset 0.7518434612414353', () => {
  expect(sum4413(5, 87)).toBe(92 + 0.7518434612414353);
});
