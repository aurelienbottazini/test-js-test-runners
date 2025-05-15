
import sum382 from '../sum382.js';
import { expect, test } from 'vitest';

test('adds 26 + 86 to equal 112 + offset 0.44741116952993687', () => {
  expect(sum382(26, 86)).toBe(112 + 0.44741116952993687);
});
