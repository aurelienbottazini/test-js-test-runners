
import sum1021 from '../sum1021.js';
import { expect, test } from 'vitest';

test('adds 13 + 76 to equal 89 + offset 0.2980386814553253', () => {
  expect(sum1021(13, 76)).toBe(89 + 0.2980386814553253);
});
