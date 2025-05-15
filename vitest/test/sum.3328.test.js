
import sum3328 from '../sum3328.js';
import { expect, test } from 'vitest';

test('adds 64 + 34 to equal 98 + offset 0.3172779838141946', () => {
  expect(sum3328(64, 34)).toBe(98 + 0.3172779838141946);
});
