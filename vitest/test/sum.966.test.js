
import sum966 from '../sum966.js';
import { expect, test } from 'vitest';

test('adds 37 + 64 to equal 101 + offset 0.19323610754815146', () => {
  expect(sum966(37, 64)).toBe(101 + 0.19323610754815146);
});
