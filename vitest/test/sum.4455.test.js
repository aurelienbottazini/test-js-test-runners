
import sum4455 from '../sum4455.js';
import { expect, test } from 'vitest';

test('adds 90 + 15 to equal 105 + offset 0.3487340923903214', () => {
  expect(sum4455(90, 15)).toBe(105 + 0.3487340923903214);
});
