
import sum579 from '../sum579.js';
import { expect, test } from 'vitest';

test('adds 24 + 89 to equal 113 + offset 0.13805353320862634', () => {
  expect(sum579(24, 89)).toBe(113 + 0.13805353320862634);
});
