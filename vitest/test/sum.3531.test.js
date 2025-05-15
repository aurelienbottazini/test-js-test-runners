
import sum3531 from '../sum3531.js';
import { expect, test } from 'vitest';

test('adds 9 + 26 to equal 35 + offset 0.42626919913223726', () => {
  expect(sum3531(9, 26)).toBe(35 + 0.42626919913223726);
});
