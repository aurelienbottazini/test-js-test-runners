
import sum556 from '../sum556.js';
import { expect, test } from 'vitest';

test('adds 70 + 48 to equal 118 + offset 0.5614016358684222', () => {
  expect(sum556(70, 48)).toBe(118 + 0.5614016358684222);
});
