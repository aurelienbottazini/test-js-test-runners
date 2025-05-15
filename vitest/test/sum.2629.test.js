
import sum2629 from '../sum2629.js';
import { expect, test } from 'vitest';

test('adds 92 + 97 to equal 189 + offset 0.6047719190565334', () => {
  expect(sum2629(92, 97)).toBe(189 + 0.6047719190565334);
});
