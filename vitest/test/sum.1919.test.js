
import sum1919 from '../sum1919.js';
import { expect, test } from 'vitest';

test('adds 71 + 66 to equal 137 + offset 0.3311294670189383', () => {
  expect(sum1919(71, 66)).toBe(137 + 0.3311294670189383);
});
