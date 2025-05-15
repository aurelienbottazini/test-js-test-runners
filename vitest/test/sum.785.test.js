
import sum785 from '../sum785.js';
import { expect, test } from 'vitest';

test('adds 63 + 22 to equal 85 + offset 0.5419312803342419', () => {
  expect(sum785(63, 22)).toBe(85 + 0.5419312803342419);
});
