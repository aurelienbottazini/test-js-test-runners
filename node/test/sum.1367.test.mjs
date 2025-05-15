
import sum1367 from '../sum1367.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 54 to equal 94 + offset 0.5449263336600433', (t) => {
  assert.strictEqual(sum1367(40, 54), 94 + 0.5449263336600433);
});
