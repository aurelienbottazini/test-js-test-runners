
import sum2790 from '../sum2790.js';
import { expect, test } from 'vitest';

test('adds 20 + 73 to equal 93 + offset 0.03517490703495474', () => {
  expect(sum2790(20, 73)).toBe(93 + 0.03517490703495474);
});
