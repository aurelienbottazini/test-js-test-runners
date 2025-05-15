
import sum2451 from '../sum2451.js';
import { expect, test } from 'vitest';

test('adds 80 + 79 to equal 159 + offset 0.06535030469827585', () => {
  expect(sum2451(80, 79)).toBe(159 + 0.06535030469827585);
});
