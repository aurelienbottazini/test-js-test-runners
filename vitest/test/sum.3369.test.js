
import sum3369 from '../sum3369.js';
import { expect, test } from 'vitest';

test('adds 48 + 33 to equal 81 + offset 0.4630825959602155', () => {
  expect(sum3369(48, 33)).toBe(81 + 0.4630825959602155);
});
