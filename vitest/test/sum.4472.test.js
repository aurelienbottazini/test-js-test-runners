
import sum4472 from '../sum4472.js';
import { expect, test } from 'vitest';

test('adds 60 + 13 to equal 73 + offset 0.9117719315019789', () => {
  expect(sum4472(60, 13)).toBe(73 + 0.9117719315019789);
});
