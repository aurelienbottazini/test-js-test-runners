
import sum2641 from '../sum2641.js';
import { expect, test } from 'vitest';

test('adds 11 + 22 to equal 33 + offset 0.023072973490847026', () => {
  expect(sum2641(11, 22)).toBe(33 + 0.023072973490847026);
});
