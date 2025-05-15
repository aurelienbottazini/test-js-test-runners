
import sum4813 from '../sum4813.js';
import { expect, test } from 'vitest';

test('adds 24 + 92 to equal 116 + offset 0.4799027925764162', () => {
  expect(sum4813(24, 92)).toBe(116 + 0.4799027925764162);
});
