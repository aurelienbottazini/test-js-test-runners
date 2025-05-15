
import sum828 from '../sum828.js';
import { expect, test } from 'vitest';

test('adds 94 + 29 to equal 123 + offset 0.40863118483269745', () => {
  expect(sum828(94, 29)).toBe(123 + 0.40863118483269745);
});
