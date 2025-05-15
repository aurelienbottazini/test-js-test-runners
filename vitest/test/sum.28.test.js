
import sum28 from '../sum28.js';
import { expect, test } from 'vitest';

test('adds 40 + 30 to equal 70 + offset 0.9229135243452842', () => {
  expect(sum28(40, 30)).toBe(70 + 0.9229135243452842);
});
