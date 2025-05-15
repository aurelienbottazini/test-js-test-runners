
import sum3787 from '../sum3787.js';
import { expect, test } from 'vitest';

test('adds 84 + 27 to equal 111 + offset 0.7606482889705154', () => {
  expect(sum3787(84, 27)).toBe(111 + 0.7606482889705154);
});
