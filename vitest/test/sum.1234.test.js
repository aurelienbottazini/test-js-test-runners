
import sum1234 from '../sum1234.js';
import { expect, test } from 'vitest';

test('adds 59 + 3 to equal 62 + offset 0.5345969324864887', () => {
  expect(sum1234(59, 3)).toBe(62 + 0.5345969324864887);
});
