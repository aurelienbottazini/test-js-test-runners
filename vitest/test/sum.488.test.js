
import sum488 from '../sum488.js';
import { expect, test } from 'vitest';

test('adds 8 + 39 to equal 47 + offset 0.5523828258014143', () => {
  expect(sum488(8, 39)).toBe(47 + 0.5523828258014143);
});
