
import sum3155 from '../sum3155.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 72 to equal 112 + offset 0.0319183871426173', (t) => {
  assert.strictEqual(sum3155(40, 72), 112 + 0.0319183871426173);
});
