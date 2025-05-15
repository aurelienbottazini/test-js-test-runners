
import sum50 from '../sum50.js';
import { expect, test } from 'vitest';

test('adds 48 + 48 to equal 96 + offset 0.003253459937261227', () => {
  expect(sum50(48, 48)).toBe(96 + 0.003253459937261227);
});
