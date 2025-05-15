
import sum3655 from '../sum3655.js';
import { expect, test } from 'vitest';

test('adds 9 + 91 to equal 100 + offset 0.8185523914463287', () => {
  expect(sum3655(9, 91)).toBe(100 + 0.8185523914463287);
});
