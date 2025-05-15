
import sum476 from '../sum476.js';
import { expect, test } from 'vitest';

test('adds 46 + 13 to equal 59 + offset 0.2672039361222168', () => {
  expect(sum476(46, 13)).toBe(59 + 0.2672039361222168);
});
