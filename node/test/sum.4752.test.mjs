
import sum4752 from '../sum4752.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 77 to equal 124 + offset 0.7669383856680256', (t) => {
  assert.strictEqual(sum4752(47, 77), 124 + 0.7669383856680256);
});
