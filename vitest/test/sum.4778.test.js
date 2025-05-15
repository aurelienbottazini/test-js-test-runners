
import sum4778 from '../sum4778.js';
import { expect, test } from 'vitest';

test('adds 76 + 15 to equal 91 + offset 0.5960770238138382', () => {
  expect(sum4778(76, 15)).toBe(91 + 0.5960770238138382);
});
