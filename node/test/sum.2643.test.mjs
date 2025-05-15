
import sum2643 from '../sum2643.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 8 to equal 88 + offset 0.4433207107977115', (t) => {
  assert.strictEqual(sum2643(80, 8), 88 + 0.4433207107977115);
});
