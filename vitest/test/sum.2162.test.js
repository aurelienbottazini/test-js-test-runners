
import sum2162 from '../sum2162.js';
import { expect, test } from 'vitest';

test('adds 90 + 91 to equal 181 + offset 0.8063932373834879', () => {
  expect(sum2162(90, 91)).toBe(181 + 0.8063932373834879);
});
