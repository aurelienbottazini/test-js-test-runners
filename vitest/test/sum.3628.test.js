
import sum3628 from '../sum3628.js';
import { expect, test } from 'vitest';

test('adds 61 + 61 to equal 122 + offset 0.24594464869460841', () => {
  expect(sum3628(61, 61)).toBe(122 + 0.24594464869460841);
});
