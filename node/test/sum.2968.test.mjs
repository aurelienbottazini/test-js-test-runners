
import sum2968 from '../sum2968.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 6 to equal 9 + offset 0.2676794961057206', (t) => {
  assert.strictEqual(sum2968(3, 6), 9 + 0.2676794961057206);
});
