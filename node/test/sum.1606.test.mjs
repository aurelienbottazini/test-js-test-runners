
import sum1606 from '../sum1606.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 78 to equal 106 + offset 0.4759520236691013', (t) => {
  assert.strictEqual(sum1606(28, 78), 106 + 0.4759520236691013);
});
