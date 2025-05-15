
import sum4663 from '../sum4663.js';
import { expect, test } from 'vitest';

test('adds 30 + 31 to equal 61 + offset 0.8276260864267093', () => {
  expect(sum4663(30, 31)).toBe(61 + 0.8276260864267093);
});
