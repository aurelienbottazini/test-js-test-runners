
import sum3589 from '../sum3589.js';
import { expect, test } from 'vitest';

test('adds 49 + 58 to equal 107 + offset 0.25520594828542764', () => {
  expect(sum3589(49, 58)).toBe(107 + 0.25520594828542764);
});
