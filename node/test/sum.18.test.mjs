
import sum18 from '../sum18.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 21 to equal 22 + offset 0.4098363341035882', (t) => {
  assert.strictEqual(sum18(1, 21), 22 + 0.4098363341035882);
});
