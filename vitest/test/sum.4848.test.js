
import sum4848 from '../sum4848.js';
import { expect, test } from 'vitest';

test('adds 6 + 3 to equal 9 + offset 0.2693685726409092', () => {
  expect(sum4848(6, 3)).toBe(9 + 0.2693685726409092);
});
