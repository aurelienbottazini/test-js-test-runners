
import sum2521 from '../sum2521.js';
import { expect, test } from 'vitest';

test('adds 24 + 13 to equal 37 + offset 0.6813864341603815', () => {
  expect(sum2521(24, 13)).toBe(37 + 0.6813864341603815);
});
