
import sum2442 from '../sum2442.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 98 to equal 116 + offset 0.9103466556425656', (t) => {
  assert.strictEqual(sum2442(18, 98), 116 + 0.9103466556425656);
});
