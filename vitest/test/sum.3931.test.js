
import sum3931 from '../sum3931.js';
import { expect, test } from 'vitest';

test('adds 76 + 51 to equal 127 + offset 0.9530986188503113', () => {
  expect(sum3931(76, 51)).toBe(127 + 0.9530986188503113);
});
