
import sum85 from '../sum85.js';
import { expect, test } from 'vitest';

test('adds 64 + 61 to equal 125 + offset 0.2956599531048403', () => {
  expect(sum85(64, 61)).toBe(125 + 0.2956599531048403);
});
