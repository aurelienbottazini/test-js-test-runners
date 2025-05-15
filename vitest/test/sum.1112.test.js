
import sum1112 from '../sum1112.js';
import { expect, test } from 'vitest';

test('adds 73 + 54 to equal 127 + offset 0.047324804357744776', () => {
  expect(sum1112(73, 54)).toBe(127 + 0.047324804357744776);
});
