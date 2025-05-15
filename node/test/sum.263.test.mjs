
import sum263 from '../sum263.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 92 to equal 158 + offset 0.40158845577173374', (t) => {
  assert.strictEqual(sum263(66, 92), 158 + 0.40158845577173374);
});
