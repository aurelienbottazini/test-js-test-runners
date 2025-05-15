
import sum2322 from '../sum2322.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 72 to equal 80 + offset 0.09471722940415561', (t) => {
  assert.strictEqual(sum2322(8, 72), 80 + 0.09471722940415561);
});
