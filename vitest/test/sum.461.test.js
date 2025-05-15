
import sum461 from '../sum461.js';
import { expect, test } from 'vitest';

test('adds 37 + 50 to equal 87 + offset 0.3085165817316502', () => {
  expect(sum461(37, 50)).toBe(87 + 0.3085165817316502);
});
