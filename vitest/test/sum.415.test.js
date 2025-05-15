
import sum415 from '../sum415.js';
import { expect, test } from 'vitest';

test('adds 62 + 78 to equal 140 + offset 0.6854178874692427', () => {
  expect(sum415(62, 78)).toBe(140 + 0.6854178874692427);
});
