
import sum3015 from '../sum3015.js';
import { expect, test } from 'vitest';

test('adds 70 + 68 to equal 138 + offset 0.9904653877574346', () => {
  expect(sum3015(70, 68)).toBe(138 + 0.9904653877574346);
});
