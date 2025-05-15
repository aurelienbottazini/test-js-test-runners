
import sum3380 from '../sum3380.js';
import { expect, test } from 'vitest';

test('adds 44 + 55 to equal 99 + offset 0.6670116588041882', () => {
  expect(sum3380(44, 55)).toBe(99 + 0.6670116588041882);
});
