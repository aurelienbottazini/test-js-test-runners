
import sum4711 from '../sum4711.js';
import { expect, test } from 'vitest';

test('adds 46 + 96 to equal 142 + offset 0.7966184937021417', () => {
  expect(sum4711(46, 96)).toBe(142 + 0.7966184937021417);
});
