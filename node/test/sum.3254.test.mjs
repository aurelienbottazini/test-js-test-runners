
import sum3254 from '../sum3254.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 58 to equal 132 + offset 0.5343128006556717', (t) => {
  assert.strictEqual(sum3254(74, 58), 132 + 0.5343128006556717);
});
