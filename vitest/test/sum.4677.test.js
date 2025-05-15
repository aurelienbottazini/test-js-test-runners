
import sum4677 from '../sum4677.js';
import { expect, test } from 'vitest';

test('adds 87 + 30 to equal 117 + offset 0.890614205133067', () => {
  expect(sum4677(87, 30)).toBe(117 + 0.890614205133067);
});
