
import sum3830 from '../sum3830.js';
import { expect, test } from 'vitest';

test('adds 96 + 58 to equal 154 + offset 0.7561621224677639', () => {
  expect(sum3830(96, 58)).toBe(154 + 0.7561621224677639);
});
