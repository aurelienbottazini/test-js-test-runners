
import sum1638 from '../sum1638.js';
import { expect, test } from 'vitest';

test('adds 10 + 62 to equal 72 + offset 0.17525918370662386', () => {
  expect(sum1638(10, 62)).toBe(72 + 0.17525918370662386);
});
