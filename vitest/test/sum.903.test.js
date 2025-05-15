
import sum903 from '../sum903.js';
import { expect, test } from 'vitest';

test('adds 49 + 36 to equal 85 + offset 0.4401389739104964', () => {
  expect(sum903(49, 36)).toBe(85 + 0.4401389739104964);
});
