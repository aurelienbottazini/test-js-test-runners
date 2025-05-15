
import sum266 from '../sum266.js';
import { expect, test } from 'vitest';

test('adds 40 + 12 to equal 52 + offset 0.07975987911031424', () => {
  expect(sum266(40, 12)).toBe(52 + 0.07975987911031424);
});
