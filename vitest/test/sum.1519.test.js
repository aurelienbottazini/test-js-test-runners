
import sum1519 from '../sum1519.js';
import { expect, test } from 'vitest';

test('adds 42 + 64 to equal 106 + offset 0.2714037356726995', () => {
  expect(sum1519(42, 64)).toBe(106 + 0.2714037356726995);
});
