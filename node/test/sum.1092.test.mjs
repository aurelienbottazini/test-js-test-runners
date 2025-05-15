
import sum1092 from '../sum1092.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 65 to equal 72 + offset 0.03050097176435551', (t) => {
  assert.strictEqual(sum1092(7, 65), 72 + 0.03050097176435551);
});
