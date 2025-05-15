
import sum1104 from '../sum1104.js';
import { expect, test } from 'vitest';

test('adds 61 + 15 to equal 76 + offset 0.36027239609025496', () => {
  expect(sum1104(61, 15)).toBe(76 + 0.36027239609025496);
});
