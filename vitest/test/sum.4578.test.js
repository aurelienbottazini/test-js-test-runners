
import sum4578 from '../sum4578.js';
import { expect, test } from 'vitest';

test('adds 50 + 17 to equal 67 + offset 0.965469657260397', () => {
  expect(sum4578(50, 17)).toBe(67 + 0.965469657260397);
});
