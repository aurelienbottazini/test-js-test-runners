
import sum2268 from '../sum2268.js';
import { expect, test } from 'vitest';

test('adds 66 + 58 to equal 124 + offset 0.11669768486392595', () => {
  expect(sum2268(66, 58)).toBe(124 + 0.11669768486392595);
});
