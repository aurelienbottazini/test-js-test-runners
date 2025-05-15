
import sum2091 from '../sum2091.js';
import { expect, test } from 'vitest';

test('adds 27 + 54 to equal 81 + offset 0.6652522563349083', () => {
  expect(sum2091(27, 54)).toBe(81 + 0.6652522563349083);
});
