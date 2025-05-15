
import sum4641 from '../sum4641.js';
import { expect, test } from 'vitest';

test('adds 39 + 74 to equal 113 + offset 0.35641104161236414', () => {
  expect(sum4641(39, 74)).toBe(113 + 0.35641104161236414);
});
