
import sum4107 from '../sum4107.js';
import { expect, test } from 'vitest';

test('adds 40 + 63 to equal 103 + offset 0.869019521030199', () => {
  expect(sum4107(40, 63)).toBe(103 + 0.869019521030199);
});
