
import sum394 from '../sum394.js';
import { expect, test } from 'vitest';

test('adds 53 + 58 to equal 111 + offset 0.2688472696524632', () => {
  expect(sum394(53, 58)).toBe(111 + 0.2688472696524632);
});
