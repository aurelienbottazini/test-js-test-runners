
import sum3957 from '../sum3957.js';
import { expect, test } from 'vitest';

test('adds 11 + 7 to equal 18 + offset 0.667533474293338', () => {
  expect(sum3957(11, 7)).toBe(18 + 0.667533474293338);
});
