
import sum449 from '../sum449.js';
import { expect, test } from 'vitest';

test('adds 39 + 90 to equal 129 + offset 0.3232291727110532', () => {
  expect(sum449(39, 90)).toBe(129 + 0.3232291727110532);
});
