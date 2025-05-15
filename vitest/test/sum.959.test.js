
import sum959 from '../sum959.js';
import { expect, test } from 'vitest';

test('adds 6 + 82 to equal 88 + offset 0.29770726628523825', () => {
  expect(sum959(6, 82)).toBe(88 + 0.29770726628523825);
});
