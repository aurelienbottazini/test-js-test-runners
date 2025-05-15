
import sum1426 from '../sum1426.js';
import { expect, test } from 'vitest';

test('adds 4 + 51 to equal 55 + offset 0.14374907946359938', () => {
  expect(sum1426(4, 51)).toBe(55 + 0.14374907946359938);
});
