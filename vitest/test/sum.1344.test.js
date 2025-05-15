
import sum1344 from '../sum1344.js';
import { expect, test } from 'vitest';

test('adds 82 + 33 to equal 115 + offset 0.8628262707441301', () => {
  expect(sum1344(82, 33)).toBe(115 + 0.8628262707441301);
});
