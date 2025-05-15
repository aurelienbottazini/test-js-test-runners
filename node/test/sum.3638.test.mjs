
import sum3638 from '../sum3638.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 90 to equal 156 + offset 0.2788196840181828', (t) => {
  assert.strictEqual(sum3638(66, 90), 156 + 0.2788196840181828);
});
