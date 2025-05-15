
import sum1912 from '../sum1912.js';
import { expect, test } from 'vitest';

test('adds 17 + 89 to equal 106 + offset 0.4550807158780207', () => {
  expect(sum1912(17, 89)).toBe(106 + 0.4550807158780207);
});
