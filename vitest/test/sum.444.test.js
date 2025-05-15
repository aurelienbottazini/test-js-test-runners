
import sum444 from '../sum444.js';
import { expect, test } from 'vitest';

test('adds 8 + 49 to equal 57 + offset 0.6206047496745813', () => {
  expect(sum444(8, 49)).toBe(57 + 0.6206047496745813);
});
