
import sum4208 from '../sum4208.js';
import { expect, test } from 'vitest';

test('adds 88 + 62 to equal 150 + offset 0.8334480118329047', () => {
  expect(sum4208(88, 62)).toBe(150 + 0.8334480118329047);
});
