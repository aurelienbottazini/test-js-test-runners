
import sum134 from '../sum134.js';
import { expect, test } from 'vitest';

test('adds 96 + 10 to equal 106 + offset 0.1106877269715314', () => {
  expect(sum134(96, 10)).toBe(106 + 0.1106877269715314);
});
