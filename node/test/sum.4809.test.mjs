
import sum4809 from '../sum4809.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 87 to equal 133 + offset 0.25805340208913163', (t) => {
  assert.strictEqual(sum4809(46, 87), 133 + 0.25805340208913163);
});
