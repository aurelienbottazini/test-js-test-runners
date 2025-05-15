
import sum3643 from '../sum3643.js';
import { expect, test } from 'vitest';

test('adds 66 + 82 to equal 148 + offset 0.42981243879291486', () => {
  expect(sum3643(66, 82)).toBe(148 + 0.42981243879291486);
});
