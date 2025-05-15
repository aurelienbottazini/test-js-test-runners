
import sum452 from '../sum452.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 57 to equal 124 + offset 0.833281268488522', (t) => {
  assert.strictEqual(sum452(67, 57), 124 + 0.833281268488522);
});
