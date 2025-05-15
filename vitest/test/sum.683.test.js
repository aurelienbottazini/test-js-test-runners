
import sum683 from '../sum683.js';
import { expect, test } from 'vitest';

test('adds 49 + 73 to equal 122 + offset 0.8897310650711572', () => {
  expect(sum683(49, 73)).toBe(122 + 0.8897310650711572);
});
