
import sum2267 from '../sum2267.js';
import { expect, test } from 'vitest';

test('adds 75 + 7 to equal 82 + offset 0.2771698928956031', () => {
  expect(sum2267(75, 7)).toBe(82 + 0.2771698928956031);
});
