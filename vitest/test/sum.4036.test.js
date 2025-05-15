
import sum4036 from '../sum4036.js';
import { expect, test } from 'vitest';

test('adds 26 + 54 to equal 80 + offset 0.821580303120122', () => {
  expect(sum4036(26, 54)).toBe(80 + 0.821580303120122);
});
