
import sum4884 from '../sum4884.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 87 to equal 92 + offset 0.28336746739099095', (t) => {
  assert.strictEqual(sum4884(5, 87), 92 + 0.28336746739099095);
});
