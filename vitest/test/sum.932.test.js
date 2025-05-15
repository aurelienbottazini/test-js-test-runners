
import sum932 from '../sum932.js';
import { expect, test } from 'vitest';

test('adds 76 + 76 to equal 152 + offset 0.5289335877770288', () => {
  expect(sum932(76, 76)).toBe(152 + 0.5289335877770288);
});
