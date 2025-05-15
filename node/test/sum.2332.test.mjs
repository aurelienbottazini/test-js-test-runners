
import sum2332 from '../sum2332.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 24 to equal 70 + offset 0.6110112465627706', (t) => {
  assert.strictEqual(sum2332(46, 24), 70 + 0.6110112465627706);
});
