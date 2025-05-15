
import sum404 from '../sum404.js';
import { expect, test } from 'vitest';

test('adds 81 + 13 to equal 94 + offset 0.5395740738969248', () => {
  expect(sum404(81, 13)).toBe(94 + 0.5395740738969248);
});
