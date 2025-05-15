
import sum3342 from '../sum3342.js';
import { expect, test } from 'vitest';

test('adds 83 + 30 to equal 113 + offset 0.8950607171654821', () => {
  expect(sum3342(83, 30)).toBe(113 + 0.8950607171654821);
});
