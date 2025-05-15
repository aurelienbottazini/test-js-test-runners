
import sum86 from '../sum86.js';
import { expect, test } from 'vitest';

test('adds 7 + 85 to equal 92 + offset 0.4034272023277222', () => {
  expect(sum86(7, 85)).toBe(92 + 0.4034272023277222);
});
