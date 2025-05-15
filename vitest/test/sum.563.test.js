
import sum563 from '../sum563.js';
import { expect, test } from 'vitest';

test('adds 57 + 66 to equal 123 + offset 0.9725682466931184', () => {
  expect(sum563(57, 66)).toBe(123 + 0.9725682466931184);
});
