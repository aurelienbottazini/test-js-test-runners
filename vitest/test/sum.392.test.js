
import sum392 from '../sum392.js';
import { expect, test } from 'vitest';

test('adds 98 + 73 to equal 171 + offset 0.23309463072570125', () => {
  expect(sum392(98, 73)).toBe(171 + 0.23309463072570125);
});
