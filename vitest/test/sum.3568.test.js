
import sum3568 from '../sum3568.js';
import { expect, test } from 'vitest';

test('adds 3 + 68 to equal 71 + offset 0.7097447055060611', () => {
  expect(sum3568(3, 68)).toBe(71 + 0.7097447055060611);
});
