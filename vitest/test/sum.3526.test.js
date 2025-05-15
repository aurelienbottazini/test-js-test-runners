
import sum3526 from '../sum3526.js';
import { expect, test } from 'vitest';

test('adds 79 + 55 to equal 134 + offset 0.3099457080587099', () => {
  expect(sum3526(79, 55)).toBe(134 + 0.3099457080587099);
});
