
import sum4096 from '../sum4096.js';
import { expect, test } from 'vitest';

test('adds 77 + 58 to equal 135 + offset 0.12993126480037676', () => {
  expect(sum4096(77, 58)).toBe(135 + 0.12993126480037676);
});
