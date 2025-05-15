
import sum560 from '../sum560.js';
import { expect, test } from 'vitest';

test('adds 80 + 65 to equal 145 + offset 0.10790746667100304', () => {
  expect(sum560(80, 65)).toBe(145 + 0.10790746667100304);
});
