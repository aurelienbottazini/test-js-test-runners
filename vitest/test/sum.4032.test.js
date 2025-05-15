
import sum4032 from '../sum4032.js';
import { expect, test } from 'vitest';

test('adds 40 + 41 to equal 81 + offset 0.4752657956133076', () => {
  expect(sum4032(40, 41)).toBe(81 + 0.4752657956133076);
});
