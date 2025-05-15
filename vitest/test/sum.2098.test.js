
import sum2098 from '../sum2098.js';
import { expect, test } from 'vitest';

test('adds 49 + 40 to equal 89 + offset 0.5059515937220844', () => {
  expect(sum2098(49, 40)).toBe(89 + 0.5059515937220844);
});
