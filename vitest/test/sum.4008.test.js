
import sum4008 from '../sum4008.js';
import { expect, test } from 'vitest';

test('adds 83 + 5 to equal 88 + offset 0.8791114362959456', () => {
  expect(sum4008(83, 5)).toBe(88 + 0.8791114362959456);
});
