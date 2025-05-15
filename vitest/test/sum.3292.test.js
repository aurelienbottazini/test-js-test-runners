
import sum3292 from '../sum3292.js';
import { expect, test } from 'vitest';

test('adds 59 + 32 to equal 91 + offset 0.08534357726578246', () => {
  expect(sum3292(59, 32)).toBe(91 + 0.08534357726578246);
});
