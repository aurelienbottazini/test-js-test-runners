
import sum2811 from '../sum2811.js';
import { expect, test } from 'vitest';

test('adds 97 + 36 to equal 133 + offset 0.2838009519816821', () => {
  expect(sum2811(97, 36)).toBe(133 + 0.2838009519816821);
});
