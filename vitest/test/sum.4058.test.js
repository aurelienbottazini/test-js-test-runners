
import sum4058 from '../sum4058.js';
import { expect, test } from 'vitest';

test('adds 29 + 62 to equal 91 + offset 0.13210425429963213', () => {
  expect(sum4058(29, 62)).toBe(91 + 0.13210425429963213);
});
