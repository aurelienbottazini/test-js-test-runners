
import sum2309 from '../sum2309.js';
import { expect, test } from 'vitest';

test('adds 30 + 29 to equal 59 + offset 0.8330499924782894', () => {
  expect(sum2309(30, 29)).toBe(59 + 0.8330499924782894);
});
