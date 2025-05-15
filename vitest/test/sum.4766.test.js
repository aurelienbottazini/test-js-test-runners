
import sum4766 from '../sum4766.js';
import { expect, test } from 'vitest';

test('adds 33 + 32 to equal 65 + offset 0.5592069074791459', () => {
  expect(sum4766(33, 32)).toBe(65 + 0.5592069074791459);
});
