
import sum4129 from '../sum4129.js';
import { expect, test } from 'vitest';

test('adds 51 + 59 to equal 110 + offset 0.18385961508737148', () => {
  expect(sum4129(51, 59)).toBe(110 + 0.18385961508737148);
});
