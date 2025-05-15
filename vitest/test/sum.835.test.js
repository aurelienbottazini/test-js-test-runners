
import sum835 from '../sum835.js';
import { expect, test } from 'vitest';

test('adds 95 + 33 to equal 128 + offset 0.18773658006347327', () => {
  expect(sum835(95, 33)).toBe(128 + 0.18773658006347327);
});
