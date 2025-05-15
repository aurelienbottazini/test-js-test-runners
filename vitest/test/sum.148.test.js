
import sum148 from '../sum148.js';
import { expect, test } from 'vitest';

test('adds 49 + 37 to equal 86 + offset 0.8575720521050275', () => {
  expect(sum148(49, 37)).toBe(86 + 0.8575720521050275);
});
