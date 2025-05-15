
import sum2096 from '../sum2096.js';
import { expect, test } from 'vitest';

test('adds 26 + 70 to equal 96 + offset 0.40207404697054516', () => {
  expect(sum2096(26, 70)).toBe(96 + 0.40207404697054516);
});
