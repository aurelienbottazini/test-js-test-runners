
import sum2004 from '../sum2004.js';
import { expect, test } from 'vitest';

test('adds 42 + 21 to equal 63 + offset 0.4239753751226363', () => {
  expect(sum2004(42, 21)).toBe(63 + 0.4239753751226363);
});
