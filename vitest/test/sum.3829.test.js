
import sum3829 from '../sum3829.js';
import { expect, test } from 'vitest';

test('adds 84 + 54 to equal 138 + offset 0.37897684567543044', () => {
  expect(sum3829(84, 54)).toBe(138 + 0.37897684567543044);
});
