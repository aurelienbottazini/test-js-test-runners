
import sum4198 from '../sum4198.js';
import { expect, test } from 'vitest';

test('adds 35 + 32 to equal 67 + offset 0.25390521147850975', () => {
  expect(sum4198(35, 32)).toBe(67 + 0.25390521147850975);
});
