
import sum2505 from '../sum2505.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 21 to equal 22 + offset 0.0759707839322461', (t) => {
  assert.strictEqual(sum2505(1, 21), 22 + 0.0759707839322461);
});
