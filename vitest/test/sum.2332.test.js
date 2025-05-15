
import sum2332 from '../sum2332.js';
import { expect, test } from 'vitest';

test('adds 21 + 86 to equal 107 + offset 0.19817088230889057', () => {
  expect(sum2332(21, 86)).toBe(107 + 0.19817088230889057);
});
