
import sum44 from '../sum44.js';
import { expect, test } from 'vitest';

test('adds 23 + 79 to equal 102 + offset 0.029771439922220977', () => {
  expect(sum44(23, 79)).toBe(102 + 0.029771439922220977);
});
