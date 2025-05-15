
import sum328 from '../sum328.js';
import { expect, test } from 'vitest';

test('adds 3 + 1 to equal 4 + offset 0.8255609097382804', () => {
  expect(sum328(3, 1)).toBe(4 + 0.8255609097382804);
});
