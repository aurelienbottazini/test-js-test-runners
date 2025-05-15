
import sum4525 from '../sum4525.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 82 to equal 178 + offset 0.782642355681521', (t) => {
  assert.strictEqual(sum4525(96, 82), 178 + 0.782642355681521);
});
