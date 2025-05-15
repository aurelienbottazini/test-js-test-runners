
import sum171 from '../sum171.js';
import { expect, test } from 'vitest';

test('adds 43 + 8 to equal 51 + offset 0.5868561177684587', () => {
  expect(sum171(43, 8)).toBe(51 + 0.5868561177684587);
});
