
import sum3355 from '../sum3355.js';
import { expect, test } from 'vitest';

test('adds 87 + 99 to equal 186 + offset 0.14020860333478768', () => {
  expect(sum3355(87, 99)).toBe(186 + 0.14020860333478768);
});
