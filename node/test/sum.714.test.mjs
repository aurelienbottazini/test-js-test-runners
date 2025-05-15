
import sum714 from '../sum714.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 78 to equal 103 + offset 0.7560843578335357', (t) => {
  assert.strictEqual(sum714(25, 78), 103 + 0.7560843578335357);
});
