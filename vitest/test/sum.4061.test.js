
import sum4061 from '../sum4061.js';
import { expect, test } from 'vitest';

test('adds 66 + 34 to equal 100 + offset 0.9376661847337071', () => {
  expect(sum4061(66, 34)).toBe(100 + 0.9376661847337071);
});
