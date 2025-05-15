
import sum265 from '../sum265.js';
import { expect, test } from 'vitest';

test('adds 41 + 46 to equal 87 + offset 0.2897726695533235', () => {
  expect(sum265(41, 46)).toBe(87 + 0.2897726695533235);
});
