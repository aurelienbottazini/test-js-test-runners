
import sum647 from '../sum647.js';
import { expect, test } from 'vitest';

test('adds 86 + 44 to equal 130 + offset 0.8993312459440365', () => {
  expect(sum647(86, 44)).toBe(130 + 0.8993312459440365);
});
