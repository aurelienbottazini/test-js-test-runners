
import sum1429 from '../sum1429.js';
import { expect, test } from 'vitest';

test('adds 6 + 84 to equal 90 + offset 0.8959980172628952', () => {
  expect(sum1429(6, 84)).toBe(90 + 0.8959980172628952);
});
