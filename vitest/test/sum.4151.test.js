
import sum4151 from '../sum4151.js';
import { expect, test } from 'vitest';

test('adds 25 + 34 to equal 59 + offset 0.9601359219730192', () => {
  expect(sum4151(25, 34)).toBe(59 + 0.9601359219730192);
});
