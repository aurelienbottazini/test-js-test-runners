
import sum3553 from '../sum3553.js';
import { expect, test } from 'vitest';

test('adds 40 + 4 to equal 44 + offset 0.20496730451439515', () => {
  expect(sum3553(40, 4)).toBe(44 + 0.20496730451439515);
});
