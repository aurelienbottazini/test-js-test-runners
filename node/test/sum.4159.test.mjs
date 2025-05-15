
import sum4159 from '../sum4159.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 33 to equal 34 + offset 0.9400006098343123', (t) => {
  assert.strictEqual(sum4159(1, 33), 34 + 0.9400006098343123);
});
