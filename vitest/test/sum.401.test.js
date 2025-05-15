
import sum401 from '../sum401.js';
import { expect, test } from 'vitest';

test('adds 89 + 8 to equal 97 + offset 0.8831117230430691', () => {
  expect(sum401(89, 8)).toBe(97 + 0.8831117230430691);
});
