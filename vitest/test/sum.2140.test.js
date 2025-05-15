
import sum2140 from '../sum2140.js';
import { expect, test } from 'vitest';

test('adds 30 + 19 to equal 49 + offset 0.6010113831293722', () => {
  expect(sum2140(30, 19)).toBe(49 + 0.6010113831293722);
});
