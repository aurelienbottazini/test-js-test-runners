
import sum511 from '../sum511.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 97 to equal 195 + offset 0.29232684168620127', (t) => {
  assert.strictEqual(sum511(98, 97), 195 + 0.29232684168620127);
});
