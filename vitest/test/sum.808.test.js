
import sum808 from '../sum808.js';
import { expect, test } from 'vitest';

test('adds 81 + 61 to equal 142 + offset 0.2675054173913528', () => {
  expect(sum808(81, 61)).toBe(142 + 0.2675054173913528);
});
