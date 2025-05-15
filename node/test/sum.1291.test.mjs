
import sum1291 from '../sum1291.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 23 to equal 38 + offset 0.2414093209072049', (t) => {
  assert.strictEqual(sum1291(15, 23), 38 + 0.2414093209072049);
});
