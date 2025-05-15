
import sum3779 from '../sum3779.js';
import { expect, test } from 'vitest';

test('adds 28 + 38 to equal 66 + offset 0.5764155060861947', () => {
  expect(sum3779(28, 38)).toBe(66 + 0.5764155060861947);
});
