
import sum936 from '../sum936.js';
import { expect, test } from 'vitest';

test('adds 29 + 63 to equal 92 + offset 0.11062013479191957', () => {
  expect(sum936(29, 63)).toBe(92 + 0.11062013479191957);
});
