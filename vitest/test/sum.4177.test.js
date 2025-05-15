
import sum4177 from '../sum4177.js';
import { expect, test } from 'vitest';

test('adds 40 + 65 to equal 105 + offset 0.849382768517059', () => {
  expect(sum4177(40, 65)).toBe(105 + 0.849382768517059);
});
