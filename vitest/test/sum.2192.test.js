
import sum2192 from '../sum2192.js';
import { expect, test } from 'vitest';

test('adds 59 + 29 to equal 88 + offset 0.43529518792756283', () => {
  expect(sum2192(59, 29)).toBe(88 + 0.43529518792756283);
});
