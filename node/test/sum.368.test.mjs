
import sum368 from '../sum368.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 10 to equal 30 + offset 0.7149266720489683', (t) => {
  assert.strictEqual(sum368(20, 10), 30 + 0.7149266720489683);
});
