
import sum581 from '../sum581.js';
import { expect, test } from 'vitest';

test('adds 57 + 33 to equal 90 + offset 0.7868377029553193', () => {
  expect(sum581(57, 33)).toBe(90 + 0.7868377029553193);
});
