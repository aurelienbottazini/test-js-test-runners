
import sum721 from '../sum721.js';
import { expect, test } from 'vitest';

test('adds 1 + 52 to equal 53 + offset 0.6732310253903001', () => {
  expect(sum721(1, 52)).toBe(53 + 0.6732310253903001);
});
