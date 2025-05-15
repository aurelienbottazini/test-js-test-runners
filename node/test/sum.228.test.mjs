
import sum228 from '../sum228.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 35 to equal 118 + offset 0.767862831497812', (t) => {
  assert.strictEqual(sum228(83, 35), 118 + 0.767862831497812);
});
