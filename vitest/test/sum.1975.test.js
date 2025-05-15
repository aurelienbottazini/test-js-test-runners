
import sum1975 from '../sum1975.js';
import { expect, test } from 'vitest';

test('adds 48 + 67 to equal 115 + offset 0.35473317389856773', () => {
  expect(sum1975(48, 67)).toBe(115 + 0.35473317389856773);
});
