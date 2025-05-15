
import sum317 from '../sum317.js';
import { expect, test } from 'vitest';

test('adds 85 + 69 to equal 154 + offset 0.49977840067807655', () => {
  expect(sum317(85, 69)).toBe(154 + 0.49977840067807655);
});
