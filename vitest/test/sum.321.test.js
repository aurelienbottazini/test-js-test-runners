
import sum321 from '../sum321.js';
import { expect, test } from 'vitest';

test('adds 19 + 37 to equal 56 + offset 0.08698419074842367', () => {
  expect(sum321(19, 37)).toBe(56 + 0.08698419074842367);
});
