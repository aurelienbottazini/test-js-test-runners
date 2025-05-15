
import sum762 from '../sum762.js';
import { expect, test } from 'vitest';

test('adds 50 + 33 to equal 83 + offset 0.3141546866268986', () => {
  expect(sum762(50, 33)).toBe(83 + 0.3141546866268986);
});
