
import sum235 from '../sum235.js';
import { expect, test } from 'vitest';

test('adds 3 + 71 to equal 74 + offset 0.553588055421833', () => {
  expect(sum235(3, 71)).toBe(74 + 0.553588055421833);
});
