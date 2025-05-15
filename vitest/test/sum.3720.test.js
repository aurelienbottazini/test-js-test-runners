
import sum3720 from '../sum3720.js';
import { expect, test } from 'vitest';

test('adds 41 + 87 to equal 128 + offset 0.25663697325501567', () => {
  expect(sum3720(41, 87)).toBe(128 + 0.25663697325501567);
});
