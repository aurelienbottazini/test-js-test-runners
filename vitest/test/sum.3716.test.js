
import sum3716 from '../sum3716.js';
import { expect, test } from 'vitest';

test('adds 90 + 34 to equal 124 + offset 0.1107138008478945', () => {
  expect(sum3716(90, 34)).toBe(124 + 0.1107138008478945);
});
