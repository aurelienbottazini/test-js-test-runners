
import sum4174 from '../sum4174.js';
import { expect, test } from 'vitest';

test('adds 55 + 61 to equal 116 + offset 0.7261461809750391', () => {
  expect(sum4174(55, 61)).toBe(116 + 0.7261461809750391);
});
