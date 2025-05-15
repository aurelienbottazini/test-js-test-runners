
import sum4921 from '../sum4921.js';
import { expect, test } from 'vitest';

test('adds 84 + 61 to equal 145 + offset 0.005549465489666505', () => {
  expect(sum4921(84, 61)).toBe(145 + 0.005549465489666505);
});
