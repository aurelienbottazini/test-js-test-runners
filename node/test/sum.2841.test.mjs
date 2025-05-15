
import sum2841 from '../sum2841.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 55 to equal 84 + offset 0.7759076366187925', (t) => {
  assert.strictEqual(sum2841(29, 55), 84 + 0.7759076366187925);
});
