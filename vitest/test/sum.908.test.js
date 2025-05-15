
import sum908 from '../sum908.js';
import { expect, test } from 'vitest';

test('adds 70 + 21 to equal 91 + offset 0.13003750368937705', () => {
  expect(sum908(70, 21)).toBe(91 + 0.13003750368937705);
});
