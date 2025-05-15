
import sum4871 from '../sum4871.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 29 to equal 125 + offset 0.902037781694115', (t) => {
  assert.strictEqual(sum4871(96, 29), 125 + 0.902037781694115);
});
