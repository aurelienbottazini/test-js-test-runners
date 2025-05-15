
import sum526 from '../sum526.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 91 to equal 181 + offset 0.8823900133373895', (t) => {
  assert.strictEqual(sum526(90, 91), 181 + 0.8823900133373895);
});
