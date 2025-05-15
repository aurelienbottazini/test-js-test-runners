
import sum2514 from '../sum2514.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 99 to equal 104 + offset 0.6180123598606893', (t) => {
  assert.strictEqual(sum2514(5, 99), 104 + 0.6180123598606893);
});
