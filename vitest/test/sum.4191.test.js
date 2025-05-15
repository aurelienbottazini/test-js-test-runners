
import sum4191 from '../sum4191.js';
import { expect, test } from 'vitest';

test('adds 46 + 52 to equal 98 + offset 0.5689796658688885', () => {
  expect(sum4191(46, 52)).toBe(98 + 0.5689796658688885);
});
