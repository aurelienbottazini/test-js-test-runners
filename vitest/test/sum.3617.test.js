
import sum3617 from '../sum3617.js';
import { expect, test } from 'vitest';

test('adds 20 + 25 to equal 45 + offset 0.6295178931217308', () => {
  expect(sum3617(20, 25)).toBe(45 + 0.6295178931217308);
});
