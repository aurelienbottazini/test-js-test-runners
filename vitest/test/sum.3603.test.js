
import sum3603 from '../sum3603.js';
import { expect, test } from 'vitest';

test('adds 48 + 73 to equal 121 + offset 0.5434832936009856', () => {
  expect(sum3603(48, 73)).toBe(121 + 0.5434832936009856);
});
