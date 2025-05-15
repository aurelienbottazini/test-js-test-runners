
import sum1749 from '../sum1749.js';
import { expect, test } from 'vitest';

test('adds 93 + 33 to equal 126 + offset 0.6969254067706505', () => {
  expect(sum1749(93, 33)).toBe(126 + 0.6969254067706505);
});
