
import sum2112 from '../sum2112.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 11 to equal 70 + offset 0.9727682458253323', (t) => {
  assert.strictEqual(sum2112(59, 11), 70 + 0.9727682458253323);
});
