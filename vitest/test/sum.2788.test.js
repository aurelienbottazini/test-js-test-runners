
import sum2788 from '../sum2788.js';
import { expect, test } from 'vitest';

test('adds 78 + 87 to equal 165 + offset 0.11112573310896234', () => {
  expect(sum2788(78, 87)).toBe(165 + 0.11112573310896234);
});
