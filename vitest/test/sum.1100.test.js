
import sum1100 from '../sum1100.js';
import { expect, test } from 'vitest';

test('adds 49 + 80 to equal 129 + offset 0.4215407203206043', () => {
  expect(sum1100(49, 80)).toBe(129 + 0.4215407203206043);
});
