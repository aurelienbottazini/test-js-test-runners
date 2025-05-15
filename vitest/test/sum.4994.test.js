
import sum4994 from '../sum4994.js';
import { expect, test } from 'vitest';

test('adds 54 + 53 to equal 107 + offset 0.15596415333273717', () => {
  expect(sum4994(54, 53)).toBe(107 + 0.15596415333273717);
});
