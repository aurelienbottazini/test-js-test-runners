
import sum4231 from '../sum4231.js';
import { expect, test } from 'vitest';

test('adds 85 + 60 to equal 145 + offset 0.842766593848991', () => {
  expect(sum4231(85, 60)).toBe(145 + 0.842766593848991);
});
