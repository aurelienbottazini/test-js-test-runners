
import sum3260 from '../sum3260.js';
import { expect, test } from 'vitest';

test('adds 50 + 99 to equal 149 + offset 0.529165861403973', () => {
  expect(sum3260(50, 99)).toBe(149 + 0.529165861403973);
});
