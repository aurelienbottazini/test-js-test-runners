
import sum4760 from '../sum4760.js';
import { expect, test } from 'vitest';

test('adds 27 + 46 to equal 73 + offset 0.9957207208613138', () => {
  expect(sum4760(27, 46)).toBe(73 + 0.9957207208613138);
});
