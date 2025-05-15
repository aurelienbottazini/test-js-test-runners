
import sum1218 from '../sum1218.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 5 to equal 79 + offset 0.5172243360786555', (t) => {
  assert.strictEqual(sum1218(74, 5), 79 + 0.5172243360786555);
});
