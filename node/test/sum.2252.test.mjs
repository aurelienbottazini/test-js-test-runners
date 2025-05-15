
import sum2252 from '../sum2252.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 38 to equal 64 + offset 0.3898220385080494', (t) => {
  assert.strictEqual(sum2252(26, 38), 64 + 0.3898220385080494);
});
