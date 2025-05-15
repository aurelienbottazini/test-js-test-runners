
import sum108 from '../sum108.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 98 to equal 105 + offset 0.373868428202242', (t) => {
  assert.strictEqual(sum108(7, 98), 105 + 0.373868428202242);
});
