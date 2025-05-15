
import sum626 from '../sum626.js';
import { expect, test } from 'vitest';

test('adds 43 + 60 to equal 103 + offset 0.877813586175644', () => {
  expect(sum626(43, 60)).toBe(103 + 0.877813586175644);
});
