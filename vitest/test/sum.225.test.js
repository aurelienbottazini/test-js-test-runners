
import sum225 from '../sum225.js';
import { expect, test } from 'vitest';

test('adds 77 + 58 to equal 135 + offset 0.2930317047108256', () => {
  expect(sum225(77, 58)).toBe(135 + 0.2930317047108256);
});
