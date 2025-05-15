
import sum144 from '../sum144.js';
import { expect, test } from 'vitest';

test('adds 81 + 72 to equal 153 + offset 0.2805241554707463', () => {
  expect(sum144(81, 72)).toBe(153 + 0.2805241554707463);
});
