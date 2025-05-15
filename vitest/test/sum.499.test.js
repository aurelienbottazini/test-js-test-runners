
import sum499 from '../sum499.js';
import { expect, test } from 'vitest';

test('adds 63 + 17 to equal 80 + offset 0.6223770467187449', () => {
  expect(sum499(63, 17)).toBe(80 + 0.6223770467187449);
});
