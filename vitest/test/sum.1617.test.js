
import sum1617 from '../sum1617.js';
import { expect, test } from 'vitest';

test('adds 6 + 95 to equal 101 + offset 0.2034952411874753', () => {
  expect(sum1617(6, 95)).toBe(101 + 0.2034952411874753);
});
