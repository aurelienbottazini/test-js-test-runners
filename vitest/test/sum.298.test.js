
import sum298 from '../sum298.js';
import { expect, test } from 'vitest';

test('adds 68 + 58 to equal 126 + offset 0.1352106453043821', () => {
  expect(sum298(68, 58)).toBe(126 + 0.1352106453043821);
});
