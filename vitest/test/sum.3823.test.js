
import sum3823 from '../sum3823.js';
import { expect, test } from 'vitest';

test('adds 72 + 16 to equal 88 + offset 0.39711784897911506', () => {
  expect(sum3823(72, 16)).toBe(88 + 0.39711784897911506);
});
