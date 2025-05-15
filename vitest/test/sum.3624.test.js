
import sum3624 from '../sum3624.js';
import { expect, test } from 'vitest';

test('adds 45 + 26 to equal 71 + offset 0.7043007037309001', () => {
  expect(sum3624(45, 26)).toBe(71 + 0.7043007037309001);
});
