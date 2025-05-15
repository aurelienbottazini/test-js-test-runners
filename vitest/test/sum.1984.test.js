
import sum1984 from '../sum1984.js';
import { expect, test } from 'vitest';

test('adds 19 + 56 to equal 75 + offset 0.9818727196867036', () => {
  expect(sum1984(19, 56)).toBe(75 + 0.9818727196867036);
});
