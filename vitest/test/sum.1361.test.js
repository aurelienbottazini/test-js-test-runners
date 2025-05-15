
import sum1361 from '../sum1361.js';
import { expect, test } from 'vitest';

test('adds 37 + 96 to equal 133 + offset 0.7833582615721438', () => {
  expect(sum1361(37, 96)).toBe(133 + 0.7833582615721438);
});
