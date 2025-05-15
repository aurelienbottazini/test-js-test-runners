
import sum4353 from '../sum4353.js';
import { expect, test } from 'vitest';

test('adds 2 + 64 to equal 66 + offset 0.8527811144890675', () => {
  expect(sum4353(2, 64)).toBe(66 + 0.8527811144890675);
});
