
import sum421 from '../sum421.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 38 to equal 49 + offset 0.5257046203011578', (t) => {
  assert.strictEqual(sum421(11, 38), 49 + 0.5257046203011578);
});
