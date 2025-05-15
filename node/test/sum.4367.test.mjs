
import sum4367 from '../sum4367.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 93 to equal 128 + offset 0.007758940111724955', (t) => {
  assert.strictEqual(sum4367(35, 93), 128 + 0.007758940111724955);
});
