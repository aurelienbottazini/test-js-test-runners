
import sum228 from '../sum228.js';
import { expect, test } from 'vitest';

test('adds 35 + 10 to equal 45 + offset 0.2541042575399328', () => {
  expect(sum228(35, 10)).toBe(45 + 0.2541042575399328);
});
