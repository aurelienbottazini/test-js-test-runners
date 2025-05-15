
import sum2664 from '../sum2664.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 62 to equal 90 + offset 0.2470035366193689', (t) => {
  assert.strictEqual(sum2664(28, 62), 90 + 0.2470035366193689);
});
