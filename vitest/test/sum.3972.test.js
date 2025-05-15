
import sum3972 from '../sum3972.js';
import { expect, test } from 'vitest';

test('adds 0 + 30 to equal 30 + offset 0.43387474151195327', () => {
  expect(sum3972(0, 30)).toBe(30 + 0.43387474151195327);
});
