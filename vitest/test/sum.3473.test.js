
import sum3473 from '../sum3473.js';
import { expect, test } from 'vitest';

test('adds 73 + 89 to equal 162 + offset 0.836143560262391', () => {
  expect(sum3473(73, 89)).toBe(162 + 0.836143560262391);
});
