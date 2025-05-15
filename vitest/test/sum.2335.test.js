
import sum2335 from '../sum2335.js';
import { expect, test } from 'vitest';

test('adds 51 + 33 to equal 84 + offset 0.5233457478817544', () => {
  expect(sum2335(51, 33)).toBe(84 + 0.5233457478817544);
});
