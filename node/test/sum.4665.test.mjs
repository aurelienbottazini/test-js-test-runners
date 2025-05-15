
import sum4665 from '../sum4665.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 21 to equal 76 + offset 0.5854848830614812', (t) => {
  assert.strictEqual(sum4665(55, 21), 76 + 0.5854848830614812);
});
