
import sum1668 from '../sum1668.js';
import { expect, test } from 'vitest';

test('adds 90 + 21 to equal 111 + offset 0.8737863310539399', () => {
  expect(sum1668(90, 21)).toBe(111 + 0.8737863310539399);
});
