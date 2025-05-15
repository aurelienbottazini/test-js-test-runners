
import sum2164 from '../sum2164.js';
import { expect, test } from 'vitest';

test('adds 98 + 97 to equal 195 + offset 0.5924016939237684', () => {
  expect(sum2164(98, 97)).toBe(195 + 0.5924016939237684);
});
