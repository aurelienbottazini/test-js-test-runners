
import sum865 from '../sum865.js';
import { expect, test } from 'vitest';

test('adds 70 + 40 to equal 110 + offset 0.6148039405245095', () => {
  expect(sum865(70, 40)).toBe(110 + 0.6148039405245095);
});
