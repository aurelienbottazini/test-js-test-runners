
import sum384 from '../sum384.js';
import { expect, test } from 'vitest';

test('adds 34 + 32 to equal 66 + offset 0.0007308736401486771', () => {
  expect(sum384(34, 32)).toBe(66 + 0.0007308736401486771);
});
