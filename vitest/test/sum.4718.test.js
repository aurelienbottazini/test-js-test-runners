
import sum4718 from '../sum4718.js';
import { expect, test } from 'vitest';

test('adds 66 + 59 to equal 125 + offset 0.176627048202732', () => {
  expect(sum4718(66, 59)).toBe(125 + 0.176627048202732);
});
