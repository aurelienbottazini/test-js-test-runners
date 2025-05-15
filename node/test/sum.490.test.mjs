
import sum490 from '../sum490.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 59 to equal 113 + offset 0.02084268550613466', (t) => {
  assert.strictEqual(sum490(54, 59), 113 + 0.02084268550613466);
});
