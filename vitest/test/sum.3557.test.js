
import sum3557 from '../sum3557.js';
import { expect, test } from 'vitest';

test('adds 21 + 28 to equal 49 + offset 0.13214747568379437', () => {
  expect(sum3557(21, 28)).toBe(49 + 0.13214747568379437);
});
