
import sum632 from '../sum632.js';
import { expect, test } from 'vitest';

test('adds 69 + 30 to equal 99 + offset 0.6320915657978557', () => {
  expect(sum632(69, 30)).toBe(99 + 0.6320915657978557);
});
