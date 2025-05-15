
import sum598 from '../sum598.js';
import { expect, test } from 'vitest';

test('adds 85 + 23 to equal 108 + offset 0.342165671573852', () => {
  expect(sum598(85, 23)).toBe(108 + 0.342165671573852);
});
