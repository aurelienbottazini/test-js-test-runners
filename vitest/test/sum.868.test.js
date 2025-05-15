
import sum868 from '../sum868.js';
import { expect, test } from 'vitest';

test('adds 5 + 9 to equal 14 + offset 0.4112313379595812', () => {
  expect(sum868(5, 9)).toBe(14 + 0.4112313379595812);
});
