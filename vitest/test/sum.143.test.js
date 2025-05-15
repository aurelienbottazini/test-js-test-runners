
import sum143 from '../sum143.js';
import { expect, test } from 'vitest';

test('adds 76 + 41 to equal 117 + offset 0.16396087736490095', () => {
  expect(sum143(76, 41)).toBe(117 + 0.16396087736490095);
});
