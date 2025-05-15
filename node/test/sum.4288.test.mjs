
import sum4288 from '../sum4288.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 88 to equal 97 + offset 0.35405775013194785', (t) => {
  assert.strictEqual(sum4288(9, 88), 97 + 0.35405775013194785);
});
