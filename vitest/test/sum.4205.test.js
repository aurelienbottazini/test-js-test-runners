
import sum4205 from '../sum4205.js';
import { expect, test } from 'vitest';

test('adds 80 + 36 to equal 116 + offset 0.205125051236137', () => {
  expect(sum4205(80, 36)).toBe(116 + 0.205125051236137);
});
