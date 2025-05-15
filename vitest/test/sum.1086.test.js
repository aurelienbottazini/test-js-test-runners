
import sum1086 from '../sum1086.js';
import { expect, test } from 'vitest';

test('adds 46 + 98 to equal 144 + offset 0.7522524956617587', () => {
  expect(sum1086(46, 98)).toBe(144 + 0.7522524956617587);
});
