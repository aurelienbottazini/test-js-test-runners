
import sum957 from '../sum957.js';
import { expect, test } from 'vitest';

test('adds 62 + 25 to equal 87 + offset 0.11217340903936812', () => {
  expect(sum957(62, 25)).toBe(87 + 0.11217340903936812);
});
