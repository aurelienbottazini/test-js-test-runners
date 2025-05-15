
import sum3814 from '../sum3814.js';
import { expect, test } from 'vitest';

test('adds 10 + 74 to equal 84 + offset 0.07781359142082633', () => {
  expect(sum3814(10, 74)).toBe(84 + 0.07781359142082633);
});
