
import sum3846 from '../sum3846.js';
import { expect, test } from 'vitest';

test('adds 40 + 4 to equal 44 + offset 0.06753605123807915', () => {
  expect(sum3846(40, 4)).toBe(44 + 0.06753605123807915);
});
