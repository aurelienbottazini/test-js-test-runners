
import sum320 from '../sum320.js';
import { expect, test } from 'vitest';

test('adds 46 + 61 to equal 107 + offset 0.8318065693543281', () => {
  expect(sum320(46, 61)).toBe(107 + 0.8318065693543281);
});
