
import sum4530 from '../sum4530.js';
import { expect, test } from 'vitest';

test('adds 6 + 12 to equal 18 + offset 0.5451113859272898', () => {
  expect(sum4530(6, 12)).toBe(18 + 0.5451113859272898);
});
