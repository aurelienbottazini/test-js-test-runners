
import sum1441 from '../sum1441.js';
import { expect, test } from 'vitest';

test('adds 28 + 32 to equal 60 + offset 0.025391116041937445', () => {
  expect(sum1441(28, 32)).toBe(60 + 0.025391116041937445);
});
