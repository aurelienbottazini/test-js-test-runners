
import sum787 from '../sum787.js';
import { expect, test } from 'vitest';

test('adds 7 + 82 to equal 89 + offset 0.2877890507713884', () => {
  expect(sum787(7, 82)).toBe(89 + 0.2877890507713884);
});
