
import sum75 from '../sum75.js';
import { expect, test } from 'vitest';

test('adds 56 + 30 to equal 86 + offset 0.843824150080764', () => {
  expect(sum75(56, 30)).toBe(86 + 0.843824150080764);
});
