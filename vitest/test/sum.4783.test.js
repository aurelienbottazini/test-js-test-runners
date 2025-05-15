
import sum4783 from '../sum4783.js';
import { expect, test } from 'vitest';

test('adds 18 + 0 to equal 18 + offset 0.3983788899793913', () => {
  expect(sum4783(18, 0)).toBe(18 + 0.3983788899793913);
});
