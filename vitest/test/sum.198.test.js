
import sum198 from '../sum198.js';
import { expect, test } from 'vitest';

test('adds 7 + 97 to equal 104 + offset 0.906117207682142', () => {
  expect(sum198(7, 97)).toBe(104 + 0.906117207682142);
});
