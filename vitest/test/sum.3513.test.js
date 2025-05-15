
import sum3513 from '../sum3513.js';
import { expect, test } from 'vitest';

test('adds 8 + 90 to equal 98 + offset 0.5309924437581998', () => {
  expect(sum3513(8, 90)).toBe(98 + 0.5309924437581998);
});
