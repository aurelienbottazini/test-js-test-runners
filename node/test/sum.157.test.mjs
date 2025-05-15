
import sum157 from '../sum157.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 38 to equal 93 + offset 0.9926877106224006', (t) => {
  assert.strictEqual(sum157(55, 38), 93 + 0.9926877106224006);
});
