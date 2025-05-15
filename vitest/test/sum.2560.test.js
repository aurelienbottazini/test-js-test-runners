
import sum2560 from '../sum2560.js';
import { expect, test } from 'vitest';

test('adds 84 + 78 to equal 162 + offset 0.14928927609642428', () => {
  expect(sum2560(84, 78)).toBe(162 + 0.14928927609642428);
});
