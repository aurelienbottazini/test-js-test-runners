
import sum209 from '../sum209.js';
import { expect, test } from 'vitest';

test('adds 20 + 40 to equal 60 + offset 0.6417386503163078', () => {
  expect(sum209(20, 40)).toBe(60 + 0.6417386503163078);
});
