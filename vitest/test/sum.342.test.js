
import sum342 from '../sum342.js';
import { expect, test } from 'vitest';

test('adds 32 + 56 to equal 88 + offset 0.4036020808418612', () => {
  expect(sum342(32, 56)).toBe(88 + 0.4036020808418612);
});
