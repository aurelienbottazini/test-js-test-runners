
import sum4694 from '../sum4694.js';
import { expect, test } from 'vitest';

test('adds 78 + 3 to equal 81 + offset 0.15062700607979862', () => {
  expect(sum4694(78, 3)).toBe(81 + 0.15062700607979862);
});
