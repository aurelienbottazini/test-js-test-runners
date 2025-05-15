
import sum714 from '../sum714.js';
import { expect, test } from 'vitest';

test('adds 97 + 36 to equal 133 + offset 0.538066646897069', () => {
  expect(sum714(97, 36)).toBe(133 + 0.538066646897069);
});
