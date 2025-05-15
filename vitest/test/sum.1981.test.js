
import sum1981 from '../sum1981.js';
import { expect, test } from 'vitest';

test('adds 84 + 28 to equal 112 + offset 0.8600572704351301', () => {
  expect(sum1981(84, 28)).toBe(112 + 0.8600572704351301);
});
