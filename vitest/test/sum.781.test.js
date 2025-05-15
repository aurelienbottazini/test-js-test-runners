
import sum781 from '../sum781.js';
import { expect, test } from 'vitest';

test('adds 33 + 63 to equal 96 + offset 0.2697636727032944', () => {
  expect(sum781(33, 63)).toBe(96 + 0.2697636727032944);
});
