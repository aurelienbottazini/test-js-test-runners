
import sum4756 from '../sum4756.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 22 to equal 95 + offset 0.000576556232950054', (t) => {
  assert.strictEqual(sum4756(73, 22), 95 + 0.000576556232950054);
});
