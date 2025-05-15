
import sum1575 from '../sum1575.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 24 to equal 112 + offset 0.007490142085350815', (t) => {
  assert.strictEqual(sum1575(88, 24), 112 + 0.007490142085350815);
});
