
import sum468 from '../sum468.js';
import { expect, test } from 'vitest';

test('adds 95 + 76 to equal 171 + offset 0.40202812134782395', () => {
  expect(sum468(95, 76)).toBe(171 + 0.40202812134782395);
});
