
import sum854 from '../sum854.js';
import { expect, test } from 'vitest';

test('adds 5 + 29 to equal 34 + offset 0.16353731481926348', () => {
  expect(sum854(5, 29)).toBe(34 + 0.16353731481926348);
});
