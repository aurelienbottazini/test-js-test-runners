
import sum3554 from '../sum3554.js';
import { expect, test } from 'vitest';

test('adds 76 + 2 to equal 78 + offset 0.485853110437402', () => {
  expect(sum3554(76, 2)).toBe(78 + 0.485853110437402);
});
