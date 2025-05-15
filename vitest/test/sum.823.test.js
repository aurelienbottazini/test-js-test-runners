
import sum823 from '../sum823.js';
import { expect, test } from 'vitest';

test('adds 55 + 9 to equal 64 + offset 0.3281877947448365', () => {
  expect(sum823(55, 9)).toBe(64 + 0.3281877947448365);
});
