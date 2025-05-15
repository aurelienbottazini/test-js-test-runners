
import sum2334 from '../sum2334.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 85 to equal 164 + offset 0.1385696161811919', (t) => {
  assert.strictEqual(sum2334(79, 85), 164 + 0.1385696161811919);
});
