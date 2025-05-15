
import sum3221 from '../sum3221.js';
import { expect, test } from 'vitest';

test('adds 32 + 27 to equal 59 + offset 0.7913349696636044', () => {
  expect(sum3221(32, 27)).toBe(59 + 0.7913349696636044);
});
