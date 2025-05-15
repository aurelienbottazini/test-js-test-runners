
import sum1418 from '../sum1418.js';
import { expect, test } from 'vitest';

test('adds 32 + 16 to equal 48 + offset 0.7559355167575871', () => {
  expect(sum1418(32, 16)).toBe(48 + 0.7559355167575871);
});
