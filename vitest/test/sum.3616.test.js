
import sum3616 from '../sum3616.js';
import { expect, test } from 'vitest';

test('adds 18 + 66 to equal 84 + offset 0.193731034824021', () => {
  expect(sum3616(18, 66)).toBe(84 + 0.193731034824021);
});
