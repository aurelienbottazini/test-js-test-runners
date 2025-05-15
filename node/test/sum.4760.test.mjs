
import sum4760 from '../sum4760.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 66 to equal 93 + offset 0.6707340800932573', (t) => {
  assert.strictEqual(sum4760(27, 66), 93 + 0.6707340800932573);
});
