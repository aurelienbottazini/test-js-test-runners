
import sum1030 from '../sum1030.js';
import { expect, test } from 'vitest';

test('adds 6 + 65 to equal 71 + offset 0.1479862423171613', () => {
  expect(sum1030(6, 65)).toBe(71 + 0.1479862423171613);
});
