
import sum4630 from '../sum4630.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 86 to equal 170 + offset 0.8264357860651707', (t) => {
  assert.strictEqual(sum4630(84, 86), 170 + 0.8264357860651707);
});
