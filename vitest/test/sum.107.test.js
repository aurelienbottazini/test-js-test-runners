
import sum107 from '../sum107.js';
import { expect, test } from 'vitest';

test('adds 65 + 72 to equal 137 + offset 0.8438271009589154', () => {
  expect(sum107(65, 72)).toBe(137 + 0.8438271009589154);
});
