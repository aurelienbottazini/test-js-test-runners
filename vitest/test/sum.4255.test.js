
import sum4255 from '../sum4255.js';
import { expect, test } from 'vitest';

test('adds 49 + 53 to equal 102 + offset 0.6148914598955717', () => {
  expect(sum4255(49, 53)).toBe(102 + 0.6148914598955717);
});
