
import sum4858 from '../sum4858.js';
import { expect, test } from 'vitest';

test('adds 64 + 23 to equal 87 + offset 0.0958673374317065', () => {
  expect(sum4858(64, 23)).toBe(87 + 0.0958673374317065);
});
