
import sum1580 from '../sum1580.js';
import { expect, test } from 'vitest';

test('adds 72 + 9 to equal 81 + offset 0.7913322936412902', () => {
  expect(sum1580(72, 9)).toBe(81 + 0.7913322936412902);
});
