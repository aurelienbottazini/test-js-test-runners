
import sum2650 from '../sum2650.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 24 to equal 116 + offset 0.6131251074934068', (t) => {
  assert.strictEqual(sum2650(92, 24), 116 + 0.6131251074934068);
});
