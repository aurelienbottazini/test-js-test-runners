
import sum312 from '../sum312.js';
import { expect, test } from 'vitest';

test('adds 27 + 8 to equal 35 + offset 0.8811871642950388', () => {
  expect(sum312(27, 8)).toBe(35 + 0.8811871642950388);
});
