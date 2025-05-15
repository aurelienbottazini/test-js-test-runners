
import sum2760 from '../sum2760.js';
import { expect, test } from 'vitest';

test('adds 20 + 75 to equal 95 + offset 0.8803171020071537', () => {
  expect(sum2760(20, 75)).toBe(95 + 0.8803171020071537);
});
