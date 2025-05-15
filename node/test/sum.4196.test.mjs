
import sum4196 from '../sum4196.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 5 to equal 96 + offset 0.38511187050034157', (t) => {
  assert.strictEqual(sum4196(91, 5), 96 + 0.38511187050034157);
});
