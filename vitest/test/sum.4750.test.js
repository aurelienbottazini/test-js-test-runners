
import sum4750 from '../sum4750.js';
import { expect, test } from 'vitest';

test('adds 46 + 2 to equal 48 + offset 0.3654178601601057', () => {
  expect(sum4750(46, 2)).toBe(48 + 0.3654178601601057);
});
