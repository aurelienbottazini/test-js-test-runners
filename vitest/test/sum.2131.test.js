
import sum2131 from '../sum2131.js';
import { expect, test } from 'vitest';

test('adds 57 + 86 to equal 143 + offset 0.013612784418022827', () => {
  expect(sum2131(57, 86)).toBe(143 + 0.013612784418022827);
});
