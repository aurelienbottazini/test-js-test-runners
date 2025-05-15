
import sum85 from '../sum85.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 93 to equal 149 + offset 0.648212176764433', (t) => {
  assert.strictEqual(sum85(56, 93), 149 + 0.648212176764433);
});
