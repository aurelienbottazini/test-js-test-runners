
import sum4041 from '../sum4041.js';
import { expect, test } from 'vitest';

test('adds 1 + 8 to equal 9 + offset 0.07946539227206717', () => {
  expect(sum4041(1, 8)).toBe(9 + 0.07946539227206717);
});
