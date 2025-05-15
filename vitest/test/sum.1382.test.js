
import sum1382 from '../sum1382.js';
import { expect, test } from 'vitest';

test('adds 22 + 75 to equal 97 + offset 0.8022990474356235', () => {
  expect(sum1382(22, 75)).toBe(97 + 0.8022990474356235);
});
