
import sum3657 from '../sum3657.js';
import { expect, test } from 'vitest';

test('adds 12 + 7 to equal 19 + offset 0.03853762266096683', () => {
  expect(sum3657(12, 7)).toBe(19 + 0.03853762266096683);
});
