
import sum3785 from '../sum3785.js';
import { expect, test } from 'vitest';

test('adds 4 + 60 to equal 64 + offset 0.25347445176437344', () => {
  expect(sum3785(4, 60)).toBe(64 + 0.25347445176437344);
});
