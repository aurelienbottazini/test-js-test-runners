
import sum3226 from '../sum3226.js';
import { expect, test } from 'vitest';

test('adds 59 + 3 to equal 62 + offset 0.9304996126673678', () => {
  expect(sum3226(59, 3)).toBe(62 + 0.9304996126673678);
});
