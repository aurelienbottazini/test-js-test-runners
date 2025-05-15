
import sum324 from '../sum324.js';
import { expect, test } from 'vitest';

test('adds 94 + 78 to equal 172 + offset 0.3114698481167718', () => {
  expect(sum324(94, 78)).toBe(172 + 0.3114698481167718);
});
