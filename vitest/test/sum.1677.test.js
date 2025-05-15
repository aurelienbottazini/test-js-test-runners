
import sum1677 from '../sum1677.js';
import { expect, test } from 'vitest';

test('adds 98 + 54 to equal 152 + offset 0.34025372157782285', () => {
  expect(sum1677(98, 54)).toBe(152 + 0.34025372157782285);
});
