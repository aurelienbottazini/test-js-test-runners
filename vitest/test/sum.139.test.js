
import sum139 from '../sum139.js';
import { expect, test } from 'vitest';

test('adds 6 + 97 to equal 103 + offset 0.14966879040519876', () => {
  expect(sum139(6, 97)).toBe(103 + 0.14966879040519876);
});
