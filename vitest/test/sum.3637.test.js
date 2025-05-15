
import sum3637 from '../sum3637.js';
import { expect, test } from 'vitest';

test('adds 89 + 66 to equal 155 + offset 0.6248508472864328', () => {
  expect(sum3637(89, 66)).toBe(155 + 0.6248508472864328);
});
