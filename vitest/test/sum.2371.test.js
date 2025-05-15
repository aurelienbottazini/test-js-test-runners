
import sum2371 from '../sum2371.js';
import { expect, test } from 'vitest';

test('adds 60 + 2 to equal 62 + offset 0.9300613942648089', () => {
  expect(sum2371(60, 2)).toBe(62 + 0.9300613942648089);
});
