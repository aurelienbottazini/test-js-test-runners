
import sum2342 from '../sum2342.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 70 to equal 164 + offset 0.6934964613306592', (t) => {
  assert.strictEqual(sum2342(94, 70), 164 + 0.6934964613306592);
});
