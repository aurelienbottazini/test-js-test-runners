
import sum4294 from '../sum4294.js';
import { expect, test } from 'vitest';

test('adds 6 + 70 to equal 76 + offset 0.03845997641329413', () => {
  expect(sum4294(6, 70)).toBe(76 + 0.03845997641329413);
});
