
import sum1927 from '../sum1927.js';
import { expect, test } from 'vitest';

test('adds 22 + 51 to equal 73 + offset 0.421982981423357', () => {
  expect(sum1927(22, 51)).toBe(73 + 0.421982981423357);
});
