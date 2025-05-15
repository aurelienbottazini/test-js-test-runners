
import sum992 from '../sum992.js';
import { expect, test } from 'vitest';

test('adds 90 + 74 to equal 164 + offset 0.08685067884199771', () => {
  expect(sum992(90, 74)).toBe(164 + 0.08685067884199771);
});
