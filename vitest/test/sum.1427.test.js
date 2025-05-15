
import sum1427 from '../sum1427.js';
import { expect, test } from 'vitest';

test('adds 74 + 39 to equal 113 + offset 0.2738867536408772', () => {
  expect(sum1427(74, 39)).toBe(113 + 0.2738867536408772);
});
