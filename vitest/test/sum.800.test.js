
import sum800 from '../sum800.js';
import { expect, test } from 'vitest';

test('adds 27 + 93 to equal 120 + offset 0.7285086004738656', () => {
  expect(sum800(27, 93)).toBe(120 + 0.7285086004738656);
});
