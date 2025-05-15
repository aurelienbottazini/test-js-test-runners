
import sum2472 from '../sum2472.js';
import { expect, test } from 'vitest';

test('adds 48 + 30 to equal 78 + offset 0.26676600746687196', () => {
  expect(sum2472(48, 30)).toBe(78 + 0.26676600746687196);
});
