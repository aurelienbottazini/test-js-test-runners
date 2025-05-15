
import sum728 from '../sum728.js';
import { expect, test } from 'vitest';

test('adds 42 + 21 to equal 63 + offset 0.6294470998689978', () => {
  expect(sum728(42, 21)).toBe(63 + 0.6294470998689978);
});
