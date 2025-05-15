
import sum805 from '../sum805.js';
import { expect, test } from 'vitest';

test('adds 38 + 36 to equal 74 + offset 0.5707249251228115', () => {
  expect(sum805(38, 36)).toBe(74 + 0.5707249251228115);
});
