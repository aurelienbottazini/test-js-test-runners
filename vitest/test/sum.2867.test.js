
import sum2867 from '../sum2867.js';
import { expect, test } from 'vitest';

test('adds 52 + 49 to equal 101 + offset 0.5186834928780297', () => {
  expect(sum2867(52, 49)).toBe(101 + 0.5186834928780297);
});
