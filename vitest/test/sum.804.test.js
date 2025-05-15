
import sum804 from '../sum804.js';
import { expect, test } from 'vitest';

test('adds 85 + 87 to equal 172 + offset 0.496670875067038', () => {
  expect(sum804(85, 87)).toBe(172 + 0.496670875067038);
});
