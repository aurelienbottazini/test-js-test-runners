
import sum1721 from '../sum1721.js';
import { expect, test } from 'vitest';

test('adds 22 + 44 to equal 66 + offset 0.06114319203611174', () => {
  expect(sum1721(22, 44)).toBe(66 + 0.06114319203611174);
});
