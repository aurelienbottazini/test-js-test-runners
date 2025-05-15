
import sum4763 from '../sum4763.js';
import { expect, test } from 'vitest';

test('adds 96 + 55 to equal 151 + offset 0.990760508307339', () => {
  expect(sum4763(96, 55)).toBe(151 + 0.990760508307339);
});
