
import sum791 from '../sum791.js';
import { expect, test } from 'vitest';

test('adds 68 + 84 to equal 152 + offset 0.07458596118658112', () => {
  expect(sum791(68, 84)).toBe(152 + 0.07458596118658112);
});
