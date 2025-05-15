
import sum1087 from '../sum1087.js';
import { expect, test } from 'vitest';

test('adds 48 + 98 to equal 146 + offset 0.23180624704814357', () => {
  expect(sum1087(48, 98)).toBe(146 + 0.23180624704814357);
});
