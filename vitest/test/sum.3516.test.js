
import sum3516 from '../sum3516.js';
import { expect, test } from 'vitest';

test('adds 95 + 71 to equal 166 + offset 0.016150266207938246', () => {
  expect(sum3516(95, 71)).toBe(166 + 0.016150266207938246);
});
