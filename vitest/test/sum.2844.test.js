
import sum2844 from '../sum2844.js';
import { expect, test } from 'vitest';

test('adds 92 + 73 to equal 165 + offset 0.7197793639281458', () => {
  expect(sum2844(92, 73)).toBe(165 + 0.7197793639281458);
});
