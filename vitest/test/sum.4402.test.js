
import sum4402 from '../sum4402.js';
import { expect, test } from 'vitest';

test('adds 82 + 15 to equal 97 + offset 0.9331880891695724', () => {
  expect(sum4402(82, 15)).toBe(97 + 0.9331880891695724);
});
