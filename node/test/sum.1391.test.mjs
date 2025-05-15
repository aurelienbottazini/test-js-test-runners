
import sum1391 from '../sum1391.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 44 to equal 105 + offset 0.16249248599871013', (t) => {
  assert.strictEqual(sum1391(61, 44), 105 + 0.16249248599871013);
});
