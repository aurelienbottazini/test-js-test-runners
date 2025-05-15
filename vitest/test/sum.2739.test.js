
import sum2739 from '../sum2739.js';
import { expect, test } from 'vitest';

test('adds 81 + 84 to equal 165 + offset 0.6294067682617975', () => {
  expect(sum2739(81, 84)).toBe(165 + 0.6294067682617975);
});
