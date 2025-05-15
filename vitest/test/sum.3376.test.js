
import sum3376 from '../sum3376.js';
import { expect, test } from 'vitest';

test('adds 91 + 57 to equal 148 + offset 0.6670284051283275', () => {
  expect(sum3376(91, 57)).toBe(148 + 0.6670284051283275);
});
