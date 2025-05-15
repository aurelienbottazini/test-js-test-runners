
import sum2375 from '../sum2375.js';
import { expect, test } from 'vitest';

test('adds 90 + 39 to equal 129 + offset 0.3613749592650429', () => {
  expect(sum2375(90, 39)).toBe(129 + 0.3613749592650429);
});
