
import sum1077 from '../sum1077.js';
import { expect, test } from 'vitest';

test('adds 37 + 92 to equal 129 + offset 0.9753091684184513', () => {
  expect(sum1077(37, 92)).toBe(129 + 0.9753091684184513);
});
