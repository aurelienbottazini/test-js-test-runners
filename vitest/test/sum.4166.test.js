
import sum4166 from '../sum4166.js';
import { expect, test } from 'vitest';

test('adds 28 + 31 to equal 59 + offset 0.40161459288530943', () => {
  expect(sum4166(28, 31)).toBe(59 + 0.40161459288530943);
});
