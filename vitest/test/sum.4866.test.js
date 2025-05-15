
import sum4866 from '../sum4866.js';
import { expect, test } from 'vitest';

test('adds 29 + 94 to equal 123 + offset 0.481735439077389', () => {
  expect(sum4866(29, 94)).toBe(123 + 0.481735439077389);
});
