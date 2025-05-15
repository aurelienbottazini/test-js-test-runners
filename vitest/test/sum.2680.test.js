
import sum2680 from '../sum2680.js';
import { expect, test } from 'vitest';

test('adds 57 + 23 to equal 80 + offset 0.23312885527367233', () => {
  expect(sum2680(57, 23)).toBe(80 + 0.23312885527367233);
});
