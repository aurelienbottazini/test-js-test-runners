
import sum4728 from '../sum4728.js';
import { expect, test } from 'vitest';

test('adds 7 + 66 to equal 73 + offset 0.7389274860980072', () => {
  expect(sum4728(7, 66)).toBe(73 + 0.7389274860980072);
});
