
import sum2717 from '../sum2717.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 48 to equal 127 + offset 0.36535536267174107', (t) => {
  assert.strictEqual(sum2717(79, 48), 127 + 0.36535536267174107);
});
