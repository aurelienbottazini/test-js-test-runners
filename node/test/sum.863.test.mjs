
import sum863 from '../sum863.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 98 to equal 116 + offset 0.3964147164641235', (t) => {
  assert.strictEqual(sum863(18, 98), 116 + 0.3964147164641235);
});
