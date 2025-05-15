
import sum4203 from '../sum4203.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 52 to equal 64 + offset 0.7949480335014165', (t) => {
  assert.strictEqual(sum4203(12, 52), 64 + 0.7949480335014165);
});
