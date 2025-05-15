
import sum3385 from '../sum3385.js';
import { expect, test } from 'vitest';

test('adds 28 + 73 to equal 101 + offset 0.7306676264124758', () => {
  expect(sum3385(28, 73)).toBe(101 + 0.7306676264124758);
});
