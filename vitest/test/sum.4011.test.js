
import sum4011 from '../sum4011.js';
import { expect, test } from 'vitest';

test('adds 40 + 79 to equal 119 + offset 0.20851607572205322', () => {
  expect(sum4011(40, 79)).toBe(119 + 0.20851607572205322);
});
