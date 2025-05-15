
import sum4580 from '../sum4580.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 44 to equal 118 + offset 0.767712002457846', (t) => {
  assert.strictEqual(sum4580(74, 44), 118 + 0.767712002457846);
});
