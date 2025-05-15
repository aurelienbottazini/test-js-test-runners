
import sum103 from '../sum103.js';
import { expect, test } from 'vitest';

test('adds 4 + 31 to equal 35 + offset 0.9285328008795036', () => {
  expect(sum103(4, 31)).toBe(35 + 0.9285328008795036);
});
