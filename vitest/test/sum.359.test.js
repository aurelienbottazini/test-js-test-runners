
import sum359 from '../sum359.js';
import { expect, test } from 'vitest';

test('adds 65 + 36 to equal 101 + offset 0.013571853652241672', () => {
  expect(sum359(65, 36)).toBe(101 + 0.013571853652241672);
});
