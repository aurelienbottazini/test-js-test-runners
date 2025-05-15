
import sum3821 from '../sum3821.js';
import { expect, test } from 'vitest';

test('adds 45 + 19 to equal 64 + offset 0.4951756276420587', () => {
  expect(sum3821(45, 19)).toBe(64 + 0.4951756276420587);
});
