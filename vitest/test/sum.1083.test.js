
import sum1083 from '../sum1083.js';
import { expect, test } from 'vitest';

test('adds 71 + 62 to equal 133 + offset 0.6064246529844682', () => {
  expect(sum1083(71, 62)).toBe(133 + 0.6064246529844682);
});
