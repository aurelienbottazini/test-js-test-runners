
import sum2554 from '../sum2554.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 93 to equal 159 + offset 0.680281391080621', (t) => {
  assert.strictEqual(sum2554(66, 93), 159 + 0.680281391080621);
});
