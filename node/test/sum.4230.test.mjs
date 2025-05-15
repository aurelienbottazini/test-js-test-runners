
import sum4230 from '../sum4230.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 25 to equal 58 + offset 0.0015608167829265218', (t) => {
  assert.strictEqual(sum4230(33, 25), 58 + 0.0015608167829265218);
});
