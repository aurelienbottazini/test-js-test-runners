
import sum4186 from '../sum4186.js';
import { expect, test } from 'vitest';

test('adds 60 + 15 to equal 75 + offset 0.30544924550967445', () => {
  expect(sum4186(60, 15)).toBe(75 + 0.30544924550967445);
});
