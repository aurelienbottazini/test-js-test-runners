
import sum90 from '../sum90.js';
import { expect, test } from 'vitest';

test('adds 22 + 73 to equal 95 + offset 0.9441705291565479', () => {
  expect(sum90(22, 73)).toBe(95 + 0.9441705291565479);
});
