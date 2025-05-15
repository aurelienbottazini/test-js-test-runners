
import sum446 from '../sum446.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 75 to equal 162 + offset 0.961886038354126', (t) => {
  assert.strictEqual(sum446(87, 75), 162 + 0.961886038354126);
});
