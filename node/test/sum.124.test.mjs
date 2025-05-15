
import sum124 from '../sum124.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 24 to equal 37 + offset 0.5890827814136514', (t) => {
  assert.strictEqual(sum124(13, 24), 37 + 0.5890827814136514);
});
