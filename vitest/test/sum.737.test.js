
import sum737 from '../sum737.js';
import { expect, test } from 'vitest';

test('adds 99 + 21 to equal 120 + offset 0.2966763379718025', () => {
  expect(sum737(99, 21)).toBe(120 + 0.2966763379718025);
});
