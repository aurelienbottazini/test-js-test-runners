
import sum6 from '../sum6.js';
import { expect, test } from 'vitest';

test('adds 20 + 56 to equal 76 + offset 0.6611455767307715', () => {
  expect(sum6(20, 56)).toBe(76 + 0.6611455767307715);
});
