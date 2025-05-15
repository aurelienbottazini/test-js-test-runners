
import sum4286 from '../sum4286.js';
import { expect, test } from 'vitest';

test('adds 73 + 22 to equal 95 + offset 0.8633464991298071', () => {
  expect(sum4286(73, 22)).toBe(95 + 0.8633464991298071);
});
