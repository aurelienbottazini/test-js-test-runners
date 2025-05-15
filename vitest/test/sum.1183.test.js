
import sum1183 from '../sum1183.js';
import { expect, test } from 'vitest';

test('adds 89 + 93 to equal 182 + offset 0.34768930954918353', () => {
  expect(sum1183(89, 93)).toBe(182 + 0.34768930954918353);
});
