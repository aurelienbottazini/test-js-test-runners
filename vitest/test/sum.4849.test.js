
import sum4849 from '../sum4849.js';
import { expect, test } from 'vitest';

test('adds 89 + 75 to equal 164 + offset 0.01875819293101544', () => {
  expect(sum4849(89, 75)).toBe(164 + 0.01875819293101544);
});
