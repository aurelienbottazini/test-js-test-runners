
import sum989 from '../sum989.js';
import { expect, test } from 'vitest';

test('adds 29 + 44 to equal 73 + offset 0.1238449973714768', () => {
  expect(sum989(29, 44)).toBe(73 + 0.1238449973714768);
});
