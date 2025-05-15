
import sum1939 from '../sum1939.js';
import { expect, test } from 'vitest';

test('adds 27 + 48 to equal 75 + offset 0.3528489328513079', () => {
  expect(sum1939(27, 48)).toBe(75 + 0.3528489328513079);
});
