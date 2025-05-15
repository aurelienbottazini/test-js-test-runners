
import sum625 from '../sum625.js';
import { expect, test } from 'vitest';

test('adds 81 + 58 to equal 139 + offset 0.7845540734680562', () => {
  expect(sum625(81, 58)).toBe(139 + 0.7845540734680562);
});
