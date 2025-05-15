
import sum4950 from '../sum4950.js';
import { expect, test } from 'vitest';

test('adds 51 + 67 to equal 118 + offset 0.949022276534213', () => {
  expect(sum4950(51, 67)).toBe(118 + 0.949022276534213);
});
