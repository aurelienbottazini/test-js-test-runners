
import sum2662 from '../sum2662.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 18 to equal 97 + offset 0.8549502156816763', (t) => {
  assert.strictEqual(sum2662(79, 18), 97 + 0.8549502156816763);
});
