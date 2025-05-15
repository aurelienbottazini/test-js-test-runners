
import sum2415 from '../sum2415.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 63 to equal 79 + offset 0.8650374821504182', (t) => {
  assert.strictEqual(sum2415(16, 63), 79 + 0.8650374821504182);
});
