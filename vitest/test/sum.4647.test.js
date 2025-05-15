
import sum4647 from '../sum4647.js';
import { expect, test } from 'vitest';

test('adds 17 + 38 to equal 55 + offset 0.813414170638081', () => {
  expect(sum4647(17, 38)).toBe(55 + 0.813414170638081);
});
