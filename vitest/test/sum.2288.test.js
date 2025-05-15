
import sum2288 from '../sum2288.js';
import { expect, test } from 'vitest';

test('adds 25 + 70 to equal 95 + offset 0.6183459078226277', () => {
  expect(sum2288(25, 70)).toBe(95 + 0.6183459078226277);
});
