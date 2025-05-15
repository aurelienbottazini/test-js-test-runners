
import sum3051 from '../sum3051.js';
import { expect, test } from 'vitest';

test('adds 8 + 20 to equal 28 + offset 0.8998039685046505', () => {
  expect(sum3051(8, 20)).toBe(28 + 0.8998039685046505);
});
