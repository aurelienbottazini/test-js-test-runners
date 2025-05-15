
import sum1762 from '../sum1762.js';
import { expect, test } from 'vitest';

test('adds 60 + 50 to equal 110 + offset 0.48971881503617587', () => {
  expect(sum1762(60, 50)).toBe(110 + 0.48971881503617587);
});
