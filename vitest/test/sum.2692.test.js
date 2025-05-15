
import sum2692 from '../sum2692.js';
import { expect, test } from 'vitest';

test('adds 6 + 21 to equal 27 + offset 0.060534137634305485', () => {
  expect(sum2692(6, 21)).toBe(27 + 0.060534137634305485);
});
