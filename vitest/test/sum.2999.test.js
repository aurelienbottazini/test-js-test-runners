
import sum2999 from '../sum2999.js';
import { expect, test } from 'vitest';

test('adds 27 + 21 to equal 48 + offset 0.14892403303395918', () => {
  expect(sum2999(27, 21)).toBe(48 + 0.14892403303395918);
});
