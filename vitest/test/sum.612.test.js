
import sum612 from '../sum612.js';
import { expect, test } from 'vitest';

test('adds 70 + 17 to equal 87 + offset 0.4968159083690641', () => {
  expect(sum612(70, 17)).toBe(87 + 0.4968159083690641);
});
