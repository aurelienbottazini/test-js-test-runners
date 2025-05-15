
import sum2672 from '../sum2672.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 90 to equal 124 + offset 0.801966368171202', (t) => {
  assert.strictEqual(sum2672(34, 90), 124 + 0.801966368171202);
});
