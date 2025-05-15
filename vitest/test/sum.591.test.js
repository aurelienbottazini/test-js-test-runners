
import sum591 from '../sum591.js';
import { expect, test } from 'vitest';

test('adds 47 + 64 to equal 111 + offset 0.21562420369055957', () => {
  expect(sum591(47, 64)).toBe(111 + 0.21562420369055957);
});
