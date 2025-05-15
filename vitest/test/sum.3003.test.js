
import sum3003 from '../sum3003.js';
import { expect, test } from 'vitest';

test('adds 25 + 58 to equal 83 + offset 0.21338211093228898', () => {
  expect(sum3003(25, 58)).toBe(83 + 0.21338211093228898);
});
