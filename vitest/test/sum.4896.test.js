
import sum4896 from '../sum4896.js';
import { expect, test } from 'vitest';

test('adds 1 + 21 to equal 22 + offset 0.580175474793616', () => {
  expect(sum4896(1, 21)).toBe(22 + 0.580175474793616);
});
