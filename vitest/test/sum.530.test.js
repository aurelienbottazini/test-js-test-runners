
import sum530 from '../sum530.js';
import { expect, test } from 'vitest';

test('adds 28 + 34 to equal 62 + offset 0.7141950905822074', () => {
  expect(sum530(28, 34)).toBe(62 + 0.7141950905822074);
});
