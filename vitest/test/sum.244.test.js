
import sum244 from '../sum244.js';
import { expect, test } from 'vitest';

test('adds 23 + 84 to equal 107 + offset 0.9110657025027329', () => {
  expect(sum244(23, 84)).toBe(107 + 0.9110657025027329);
});
