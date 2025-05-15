
import sum4830 from '../sum4830.js';
import { expect, test } from 'vitest';

test('adds 41 + 99 to equal 140 + offset 0.47534596098802495', () => {
  expect(sum4830(41, 99)).toBe(140 + 0.47534596098802495);
});
