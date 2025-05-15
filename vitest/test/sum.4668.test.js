
import sum4668 from '../sum4668.js';
import { expect, test } from 'vitest';

test('adds 90 + 53 to equal 143 + offset 0.6236976376561911', () => {
  expect(sum4668(90, 53)).toBe(143 + 0.6236976376561911);
});
