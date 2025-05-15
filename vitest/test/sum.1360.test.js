
import sum1360 from '../sum1360.js';
import { expect, test } from 'vitest';

test('adds 71 + 19 to equal 90 + offset 0.7505613892131224', () => {
  expect(sum1360(71, 19)).toBe(90 + 0.7505613892131224);
});
