
import sum1128 from '../sum1128.js';
import { expect, test } from 'vitest';

test('adds 55 + 91 to equal 146 + offset 0.3711488513531097', () => {
  expect(sum1128(55, 91)).toBe(146 + 0.3711488513531097);
});
