
import sum188 from '../sum188.js';
import { expect, test } from 'vitest';

test('adds 68 + 91 to equal 159 + offset 0.11247913216368555', () => {
  expect(sum188(68, 91)).toBe(159 + 0.11247913216368555);
});
