
import sum797 from '../sum797.js';
import { expect, test } from 'vitest';

test('adds 31 + 80 to equal 111 + offset 0.5823297611103448', () => {
  expect(sum797(31, 80)).toBe(111 + 0.5823297611103448);
});
