
import sum3287 from '../sum3287.js';
import { expect, test } from 'vitest';

test('adds 50 + 62 to equal 112 + offset 0.387582956781356', () => {
  expect(sum3287(50, 62)).toBe(112 + 0.387582956781356);
});
