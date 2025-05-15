
import sum4627 from '../sum4627.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 90 to equal 118 + offset 0.07726451135360768', (t) => {
  assert.strictEqual(sum4627(28, 90), 118 + 0.07726451135360768);
});
