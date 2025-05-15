
import sum4363 from '../sum4363.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 82 to equal 86 + offset 0.11761137856072423', (t) => {
  assert.strictEqual(sum4363(4, 82), 86 + 0.11761137856072423);
});
