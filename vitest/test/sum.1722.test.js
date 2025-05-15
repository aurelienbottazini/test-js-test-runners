
import sum1722 from '../sum1722.js';
import { expect, test } from 'vitest';

test('adds 3 + 70 to equal 73 + offset 0.8319249665722169', () => {
  expect(sum1722(3, 70)).toBe(73 + 0.8319249665722169);
});
