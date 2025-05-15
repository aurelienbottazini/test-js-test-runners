
import sum2772 from '../sum2772.js';
import { expect, test } from 'vitest';

test('adds 0 + 46 to equal 46 + offset 0.7653313533979512', () => {
  expect(sum2772(0, 46)).toBe(46 + 0.7653313533979512);
});
