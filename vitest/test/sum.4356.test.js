
import sum4356 from '../sum4356.js';
import { expect, test } from 'vitest';

test('adds 7 + 76 to equal 83 + offset 0.3164731862528364', () => {
  expect(sum4356(7, 76)).toBe(83 + 0.3164731862528364);
});
