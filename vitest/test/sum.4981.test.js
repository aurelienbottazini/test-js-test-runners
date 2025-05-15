
import sum4981 from '../sum4981.js';
import { expect, test } from 'vitest';

test('adds 23 + 98 to equal 121 + offset 0.49127837914041983', () => {
  expect(sum4981(23, 98)).toBe(121 + 0.49127837914041983);
});
