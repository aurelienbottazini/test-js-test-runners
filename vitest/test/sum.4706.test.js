
import sum4706 from '../sum4706.js';
import { expect, test } from 'vitest';

test('adds 87 + 14 to equal 101 + offset 0.5443710812704322', () => {
  expect(sum4706(87, 14)).toBe(101 + 0.5443710812704322);
});
