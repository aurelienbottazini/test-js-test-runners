
import sum3654 from '../sum3654.js';
import { expect, test } from 'vitest';

test('adds 50 + 58 to equal 108 + offset 0.8746721490987978', () => {
  expect(sum3654(50, 58)).toBe(108 + 0.8746721490987978);
});
