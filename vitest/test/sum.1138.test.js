
import sum1138 from '../sum1138.js';
import { expect, test } from 'vitest';

test('adds 81 + 67 to equal 148 + offset 0.45724309588173184', () => {
  expect(sum1138(81, 67)).toBe(148 + 0.45724309588173184);
});
