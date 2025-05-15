
import sum3738 from '../sum3738.js';
import { expect, test } from 'vitest';

test('adds 19 + 61 to equal 80 + offset 0.06513544809183258', () => {
  expect(sum3738(19, 61)).toBe(80 + 0.06513544809183258);
});
