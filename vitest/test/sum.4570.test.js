
import sum4570 from '../sum4570.js';
import { expect, test } from 'vitest';

test('adds 74 + 38 to equal 112 + offset 0.3501784239083421', () => {
  expect(sum4570(74, 38)).toBe(112 + 0.3501784239083421);
});
