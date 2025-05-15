
import sum4320 from '../sum4320.js';
import { expect, test } from 'vitest';

test('adds 64 + 97 to equal 161 + offset 0.5207282121973794', () => {
  expect(sum4320(64, 97)).toBe(161 + 0.5207282121973794);
});
