
import sum184 from '../sum184.js';
import { expect, test } from 'vitest';

test('adds 28 + 84 to equal 112 + offset 0.4662161950168303', () => {
  expect(sum184(28, 84)).toBe(112 + 0.4662161950168303);
});
