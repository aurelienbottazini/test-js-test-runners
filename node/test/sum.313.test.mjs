
import sum313 from '../sum313.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 71 to equal 165 + offset 0.7691101437397291', (t) => {
  assert.strictEqual(sum313(94, 71), 165 + 0.7691101437397291);
});
