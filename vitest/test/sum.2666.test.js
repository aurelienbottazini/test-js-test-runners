
import sum2666 from '../sum2666.js';
import { expect, test } from 'vitest';

test('adds 72 + 49 to equal 121 + offset 0.913761875770234', () => {
  expect(sum2666(72, 49)).toBe(121 + 0.913761875770234);
});
