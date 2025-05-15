
import sum4435 from '../sum4435.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 30 to equal 124 + offset 0.4263354328615254', (t) => {
  assert.strictEqual(sum4435(94, 30), 124 + 0.4263354328615254);
});
