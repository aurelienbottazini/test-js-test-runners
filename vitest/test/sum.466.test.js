
import sum466 from '../sum466.js';
import { expect, test } from 'vitest';

test('adds 48 + 32 to equal 80 + offset 0.7623716495033155', () => {
  expect(sum466(48, 32)).toBe(80 + 0.7623716495033155);
});
