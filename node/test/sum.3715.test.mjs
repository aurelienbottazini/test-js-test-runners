
import sum3715 from '../sum3715.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 74 to equal 150 + offset 0.829455337688523', (t) => {
  assert.strictEqual(sum3715(76, 74), 150 + 0.829455337688523);
});
