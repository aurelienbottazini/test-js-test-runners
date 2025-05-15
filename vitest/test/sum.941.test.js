
import sum941 from '../sum941.js';
import { expect, test } from 'vitest';

test('adds 40 + 66 to equal 106 + offset 0.9584069528732044', () => {
  expect(sum941(40, 66)).toBe(106 + 0.9584069528732044);
});
