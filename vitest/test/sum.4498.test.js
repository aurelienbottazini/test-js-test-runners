
import sum4498 from '../sum4498.js';
import { expect, test } from 'vitest';

test('adds 34 + 59 to equal 93 + offset 0.06232842815757067', () => {
  expect(sum4498(34, 59)).toBe(93 + 0.06232842815757067);
});
